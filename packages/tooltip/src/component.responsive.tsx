import cn from 'classnames';
import React, { FC, Fragment } from 'react';
import { useMedia } from '@alfalab/hooks';

import { BottomSheet } from '@alfalab/core-components-bottom-sheet';
import { Button } from '@alfalab/core-components-button';

import { Tooltip, TooltipProps } from '.';
import { useControlled } from './utils';

import styles from './responsive.module.css';

type View = 'desktop' | 'mobile';

type TooltipResponsiveProps = Omit<TooltipProps, 'open' | 'onClose' | 'onOpen'> & {
    /**
     * Режим отображения по умолчанию
     */
    defaultMatch?: View;

    /**
     * Управление видимостью
     */
    open?: boolean;

    /**
     * Обработчик открытия
     */
    onOpen?: () => void;

    /**
     * Обработчик закрытия
     */
    onClose?: () => void;

    /**
     * Заголовок кнопки в футере
     */
    actionButtonTitle?: string;

    /**
     * Наличие компонента крестика
     */
    hasCloser?: boolean;
};

export const TooltipResponsive: FC<TooltipResponsiveProps> = ({
    defaultMatch = 'mobile',
    content,
    children,
    open,
    onOpen,
    onClose,
    actionButtonTitle = 'Понятно',
    hasCloser,
    targetRef,
    targetClassName,
    ...restProps
}) => {
    const [view] = useMedia<View>(
        [
            ['mobile', '(max-width: 767px)'],
            ['desktop', '(min-width: 768px)'],
        ],
        defaultMatch,
    );

    const [openValue, setOpenValueIfUncontrolled] = useControlled(open, false);

    const handleOpen = () => {
        if (onOpen) {
            onOpen();
        } else {
            setOpenValueIfUncontrolled(true);
        }
    };

    const handleClose = () => {
        if (onClose) {
            onClose();
        } else {
            setOpenValueIfUncontrolled(false);
        }
    };

    const isMobile = view === 'mobile';

    return isMobile ? (
        <Fragment>
            <BottomSheet
                {...restProps}
                open={Boolean(openValue)}
                onClose={handleClose}
                hasCloser={hasCloser}
                actionButton={
                    <Button view='secondary' block={true} size='s' onClick={handleClose}>
                        {actionButtonTitle}
                    </Button>
                }
            >
                {content}
            </BottomSheet>
            {/** TODO: проверить тултип на доступность */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div
                ref={targetRef as React.Ref<HTMLDivElement>}
                onClick={handleOpen}
                className={cn(styles.target, targetClassName)}
            >
                {children?.props.disabled && <div className={styles.overlap} />}
                {children}
            </div>
        </Fragment>
    ) : (
        <Tooltip
            {...restProps}
            open={open}
            content={content}
            onOpen={handleOpen}
            onClose={handleClose}
            targetClassName={targetClassName}
            targetRef={targetRef}
        >
            {children}
        </Tooltip>
    );
};
