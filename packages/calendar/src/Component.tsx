import React, { forwardRef, MouseEvent, useCallback, useMemo, useState } from 'react';
import cn from 'classnames';
import startOfDay from 'date-fns/startOfDay';
import startOfMonth from 'date-fns/startOfMonth';
import endOfDay from 'date-fns/endOfDay';
import { useDidUpdateEffect } from '@alfalab/hooks';
import { Header } from './components/header';
import { DaysTable } from './components/days-table';
import { MonthsTable } from './components/months-table';
import { YearsTable } from './components/years-table';
import { PeriodSlider } from './components/period-slider';
import { useCalendar } from './useCalendar';
import { limitDate } from './utils';
import { View, SelectorView } from './typings';

import styles from './index.module.css';
import { MonthYearHeader } from './components/month-year-header';

export type CalendarProps = {
    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Вид по умолчанию (выбор дней, месяцев, лет)
     */
    defaultView?: View;

    /**
     * Вид шапки — месяц и год или только месяц
     */
    selectorView?: SelectorView;

    /**
     * Возможность выбора месяца и года, если selectorView 'month-only'
     */
    isMonthAndYearSelectable?: boolean;

    /**
     * Отображать ли текущий год, если isMonthAndYearSelectable true
     */
    showCurrentYearSelector?: boolean;

    /**
     * Выбранная дата (timestamp)
     */
    value?: number;

    /**
     * Открытый месяц (timestamp)
     */
    month?: number;

    /**
     * Месяц, открытый по умолчанию (timestamp)
     */
    defaultMonth?: number;

    /**
     * Минимальная дата, доступная для выбора (timestamp)
     */
    minDate?: number;

    /**
     * Максимальная дата, доступная для выбора (timestamp)
     */
    maxDate?: number;

    /**
     * Начало выделенного периода (timestamp)
     */
    selectedFrom?: number;

    /**
     * Конец выделенного периода (timestamp)
     */
    selectedTo?: number;

    /**
     * Индикатор, что выбран полный период
     */
    rangeComplete?: boolean;

    /**
     * Список событий
     */
    events?: Array<Date | number>;

    /**
     * Список выходных
     */
    offDays?: Array<Date | number>;

    /**
     * Обработчик изменения месяца (или года)
     */
    onMonthChange?: (month: number) => void;

    /**
     * Обработчик выбора даты
     */
    onChange?: (date: number) => void;

    /**
     * Обработчик нажатия на кнопку месяца
     */
    onMonthClick?: (event: MouseEvent<HTMLButtonElement>) => void;

    /**
     * Обработчик нажатия на кнопку года
     */
    onYearClick?: (event: MouseEvent<HTMLButtonElement>) => void;

    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
    (
        {
            className,
            defaultView = 'days',
            selectorView = 'full',
            isMonthAndYearSelectable,
            showCurrentYearSelector,
            value,
            month: monthTimestamp,
            minDate: minDateTimestamp,
            maxDate: maxDateTimestamp,
            defaultMonth: defaultMonthTimestamp = +new Date(),
            selectedFrom,
            selectedTo,
            rangeComplete,
            offDays,
            events,
            onChange,
            onMonthChange,
            onMonthClick,
            onYearClick,
            dataTestId,
        },
        ref,
    ) => {
        const [view, setView] = useState<View>(defaultView);
        const [scrolled, setScrolled] = useState(false);

        const selected = useMemo(() => (value ? new Date(value) : undefined), [value]);

        const defaultMonth = useMemo(
            () =>
                startOfMonth(
                    selected ||
                        limitDate(defaultMonthTimestamp, minDateTimestamp, maxDateTimestamp),
                ),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [],
        );

        const month = useMemo(() => (monthTimestamp ? new Date(monthTimestamp) : undefined), [
            monthTimestamp,
        ]);

        const minDate = useMemo(
            () => (minDateTimestamp ? startOfDay(minDateTimestamp) : undefined),
            [minDateTimestamp],
        );

        const maxDate = useMemo(() => (maxDateTimestamp ? endOfDay(maxDateTimestamp) : undefined), [
            maxDateTimestamp,
        ]);

        const {
            activeMonth,
            weeks,
            months,
            years,
            canSetPrevMonth,
            canSetNextMonth,
            setMonthByDate,
            setPrevMonth,
            setNextMonth,
            highlighted,
            getDayProps,
            getMonthProps,
            getYearProps,
            getRootProps,
        } = useCalendar({
            month,
            defaultMonth,
            view,
            minDate,
            maxDate,
            selected,
            offDays,
            events,
            onChange,
            onMonthChange,
        });

        const toggleView = useCallback(
            (newView: View) => {
                setView(view === newView ? 'days' : newView);
            },
            [view],
        );

        const handleScroll = useCallback((scrollTop: number) => {
            setScrolled(scrollTop > 0);
        }, []);

        const handlePrevArrowClick = useCallback(() => {
            // TODO: Что должны делать стрелки при view !== days?
            setPrevMonth();
        }, [setPrevMonth]);

        const handleNextArrowClick = useCallback(() => {
            setNextMonth();
        }, [setNextMonth]);

        const handleMonthClick = useCallback(
            event => {
                toggleView('months');

                if (onMonthClick) {
                    onMonthClick(event);
                }
            },
            [onMonthClick, toggleView],
        );

        const handleYearClick = useCallback(
            event => {
                toggleView('years');

                if (onYearClick) {
                    onYearClick(event);
                }
            },
            [onYearClick, toggleView],
        );

        useDidUpdateEffect(() => {
            setView('days');
        }, [activeMonth]);

        useDidUpdateEffect(() => {
            setScrolled(false);
        }, [view]);

        useDidUpdateEffect(() => {
            const newMonth = value && startOfMonth(value);
            if (newMonth && newMonth.getTime() !== activeMonth.getTime()) {
                setMonthByDate(newMonth);
            }
        }, [value]);

        return (
            <div
                {...getRootProps({ ref })}
                className={cn('cc-calendar', styles.component, className, {
                    [styles.sixWeeks]: weeks.length === 6,
                })}
                data-test-id={dataTestId}
            >
                <Header view={selectorView} withShadow={scrolled}>
                    {selectorView === 'month-only' ? (
                        <PeriodSlider
                            className={styles.period}
                            value={activeMonth}
                            periodType='month'
                            prevArrowDisabled={!canSetPrevMonth}
                            nextArrowDisabled={!canSetNextMonth}
                            hideDisabledArrows={true}
                            isMonthAndYearSelectable={isMonthAndYearSelectable}
                            showCurrentYearSelector={showCurrentYearSelector}
                            onPrevArrowClick={handlePrevArrowClick}
                            onNextArrowClick={handleNextArrowClick}
                            onMonthClick={handleMonthClick}
                            onYearClick={handleYearClick}
                        />
                    ) : (
                        <MonthYearHeader
                            className={styles.monthYear}
                            value={activeMonth}
                            onMonthClick={handleMonthClick}
                            onYearClick={handleYearClick}
                        />
                    )}
                </Header>

                <div className={cn(styles.container, styles[view])}>
                    {view === 'days' && (
                        <DaysTable
                            weeks={weeks}
                            activeMonth={activeMonth}
                            selectedFrom={selectedFrom}
                            selectedTo={selectedTo}
                            getDayProps={getDayProps}
                            highlighted={highlighted}
                            rangeComplete={rangeComplete}
                        />
                    )}

                    {view === 'months' && (
                        <MonthsTable
                            selectedMonth={activeMonth}
                            months={months}
                            getMonthProps={getMonthProps}
                        />
                    )}

                    {view === 'years' && (
                        <YearsTable
                            selectedYear={activeMonth}
                            years={years}
                            getYearProps={getYearProps}
                            onScroll={handleScroll}
                        />
                    )}
                </div>
            </div>
        );
    },
);
