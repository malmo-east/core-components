# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.3.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@4.3.1...@alfalab/core-components-bottom-sheet@4.3.2) (2022-06-24)

**Note:** Version bump only for package @alfalab/core-components-bottom-sheet





## [4.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@4.3.0...@alfalab/core-components-bottom-sheet@4.3.1) (2022-06-23)

**Note:** Version bump only for package @alfalab/core-components-bottom-sheet





# [4.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@4.2.1...@alfalab/core-components-bottom-sheet@4.3.0) (2022-06-20)


### Features

* **input-autocomplete:** add new component InputAutocompleteMobile ([#96](https://github.com/core-ds/core-components/issues/96)) ([a0e9f95](https://github.com/core-ds/core-components/commit/a0e9f95edbfcd6722e99647d75a262805e81a4a7))





## [4.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@4.2.0...@alfalab/core-components-bottom-sheet@4.2.1) (2022-06-20)

**Note:** Version bump only for package @alfalab/core-components-bottom-sheet





# [4.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@4.1.5...@alfalab/core-components-bottom-sheet@4.2.0) (2022-06-16)


### Features

* **BottonSheet:** prop for controlling animation on screen size chan… ([#89](https://github.com/core-ds/core-components/issues/89)) ([a69e178](https://github.com/core-ds/core-components/commit/a69e17891d1fd91ba6f35bfc097ae1fc9cbf92df))





## [4.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@4.1.4...@alfalab/core-components-bottom-sheet@4.1.5) (2022-06-03)

**Note:** Version bump only for package @alfalab/core-components-bottom-sheet





## [4.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@4.0.1...@alfalab/core-components-bottom-sheet@4.0.2) (2022-03-30)

**Note:** Version bump only for package @alfalab/core-components-bottom-sheet





## [4.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@4.0.0...@alfalab/core-components-bottom-sheet@4.0.1) (2022-03-28)


### Bug Fixes

* fix modal and bottom-sheet dark mode ([#1043](https://github.com/core-ds/core-components/issues/1043)) ([cad36a2](https://github.com/core-ds/core-components/commit/cad36a25b28bfa71296c3dd9dc325eec28b5c241))
* **bottom-sheet:** fix bottom-sheet swipeable marker ([#1044](https://github.com/core-ds/core-components/issues/1044)) ([0734e55](https://github.com/core-ds/core-components/commit/0734e55cc0e394fb33452f875ffcf47819277aee))





# [4.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@3.1.1...@alfalab/core-components-bottom-sheet@4.0.0) (2022-03-24)


### Features

* **bottom-sheet:** update-bottom-sheet ([#1025](https://github.com/core-ds/core-components/issues/1025)) ([26fa9aa](https://github.com/core-ds/core-components/commit/26fa9aab68bebf0f7093a38bc0f18a9b596ccf37)), closes [#1032](https://github.com/core-ds/core-components/issues/1032)


### BREAKING CHANGES

* **bottom-sheet:** Большое обновление стилей, множество дополнительных настроек





## [3.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@3.1.0...@alfalab/core-components-bottom-sheet@3.1.1) (2022-03-03)

**Note:** Version bump only for package @alfalab/core-components-bottom-sheet





# [3.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@3.0.2...@alfalab/core-components-bottom-sheet@3.1.0) (2022-03-01)


### Features

* Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))





## [3.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@3.0.1...@alfalab/core-components-bottom-sheet@3.0.2) (2022-01-27)


### Bug Fixes

* **bottom-sheet:** fix double calling onClose fn ([#962](https://github.com/core-ds/core-components/issues/962)) ([feda2a4](https://github.com/core-ds/core-components/commit/feda2a4c8d3a4f40a1ab9c40eb21f5359e4fa538))





## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@3.0.0...@alfalab/core-components-bottom-sheet@3.0.1) (2022-01-17)

**Note:** Version bump only for package @alfalab/core-components-bottom-sheet





# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@2.1.1...@alfalab/core-components-bottom-sheet@3.0.0) (2021-11-26)


### Features

* **button:** добавлена кнопка размера 40px, изменены скругления ([#886](https://github.com/core-ds/core-components/issues/886)) ([88e657a](https://github.com/core-ds/core-components/commit/88e657a9f0f68b8b58f6e9437053954ee984f83c)), closes [#890](https://github.com/core-ds/core-components/issues/890)


### BREAKING CHANGES

* **button:** Кнопка размера xs теперь имеет размер 40px. Тем, кто использовал размер xs, надо
заменить размер  на xxs. Можно воспользоваться codemod.

* feat(codemod): add button xs to xxs transformer

* feat(tag): добавлен тэг размера 40px, изменены отступы

Добавлен тэг размером 40px, изменены отступы. Тем, кто использовал размер xs, надо заменить размер
на xxs.
* **button:** Тэг размера xs теперь имеет размер 40px. Тем, кто использовал размер xs, надо
заменить размер на xxs. Можно воспользоваться codemod.

* test: update screenshots

* test: update screenshots

* feat(button): linter fix

* feat(button): fix min-width

* feat(tag): remove vertical paddings

* feat(tag): remove vertical paddings

* feat(button): updates





## [2.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@2.1.0...@alfalab/core-components-bottom-sheet@2.1.1) (2021-09-14)


### Bug Fixes

* **base-modal:** modal scroll ([#820](https://github.com/core-ds/core-components/issues/820)) ([1b2d94a](https://github.com/core-ds/core-components/commit/1b2d94ad45e04145bf1292d749ae2028702dc622))





# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@2.0.2...@alfalab/core-components-bottom-sheet@2.1.0) (2021-07-23)


### Features

* **bottom-sheet:** fix marker gap, fix animation duration ([#750](https://github.com/core-ds/core-components/issues/750)) ([cb04ed8](https://github.com/core-ds/core-components/commit/cb04ed8cc214fac9dba32a0ab39a4399743d5bfc))





## [2.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@2.0.1...@alfalab/core-components-bottom-sheet@2.0.2) (2021-07-19)

**Note:** Version bump only for package @alfalab/core-components-bottom-sheet





## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@2.0.0...@alfalab/core-components-bottom-sheet@2.0.1) (2021-07-09)

**Note:** Version bump only for package @alfalab/core-components-bottom-sheet





# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@1.1.1...@alfalab/core-components-bottom-sheet@2.0.0) (2021-07-08)


### Features

* upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))

## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-bottom-sheet@1.1.0...@alfalab/core-components-bottom-sheet@1.1.1) (2021-07-02)

**Note:** Version bump only for package @alfalab/core-components-bottom-sheet





# 1.1.0 (2021-06-28)


### Features

* **bottom-sheet:** new component (PDS-228) ([#645](https://github.com/core-ds/core-components/issues/645)) ([1f7391d](https://github.com/core-ds/core-components/commit/1f7391df16a270d8a3a28b8ebaf98d0ed0928bc8)), closes [#642](https://github.com/core-ds/core-components/issues/642) [#642](https://github.com/core-ds/core-components/issues/642) [#646](https://github.com/core-ds/core-components/issues/646) [#646](https://github.com/core-ds/core-components/issues/646) [#634](https://github.com/core-ds/core-components/issues/634) [#635](https://github.com/core-ds/core-components/issues/635) [#634](https://github.com/core-ds/core-components/issues/634) [#635](https://github.com/core-ds/core-components/issues/635) [#648](https://github.com/core-ds/core-components/issues/648) [#647](https://github.com/core-ds/core-components/issues/647) [#630](https://github.com/core-ds/core-components/issues/630) [#648](https://github.com/core-ds/core-components/issues/648) [#630](https://github.com/core-ds/core-components/issues/630) [#669](https://github.com/core-ds/core-components/issues/669)
