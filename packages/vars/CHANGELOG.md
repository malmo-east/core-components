# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [6.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@6.1.0...@alfalab/core-components-vars@6.2.0) (2022-06-23)


### Bug Fixes

* **button:** fix color secondary ([#92](https://github.com/core-ds/core-components/issues/92)) ([57b8e66](https://github.com/core-ds/core-components/commit/57b8e661b8f54acdfd0c235f58ebd59d66c116a4))


### Features

* **vars:** export CSS custom properties as JS vars ([#45](https://github.com/core-ds/core-components/issues/45)) ([dbb1f78](https://github.com/core-ds/core-components/commit/dbb1f78795247fa09797c05f134b21a7774e6898))





# [6.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@6.0.0...@alfalab/core-components-vars@6.1.0) (2022-06-08)


### Features

* **scrollbar:** new component scrollbar ([#48](https://github.com/core-ds/core-components/issues/48)) ([5ea6fa3](https://github.com/core-ds/core-components/commit/5ea6fa352ff943cda8c52e35f9d96da9bea97fa3))





## [5.5.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@5.5.1...@alfalab/core-components-vars@5.5.2) (2022-03-28)


### Bug Fixes

* fix modal and bottom-sheet dark mode ([#1043](https://github.com/core-ds/core-components/issues/1043)) ([cad36a2](https://github.com/core-ds/core-components/commit/cad36a25b28bfa71296c3dd9dc325eec28b5c241))





## [5.5.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@5.5.0...@alfalab/core-components-vars@5.5.1) (2022-03-24)

**Note:** Version bump only for package @alfalab/core-components-vars





# [5.5.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@5.4.0...@alfalab/core-components-vars@5.5.0) (2022-03-18)


### Features

* **calendar:** add intranet theme ([#1026](https://github.com/core-ds/core-components/issues/1026)) ([292b76c](https://github.com/core-ds/core-components/commit/292b76c100bb12ebb1011d2a9981ba2b2899dd7a))
* Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))





# [5.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@5.3.0...@alfalab/core-components-vars@5.4.0) (2022-02-17)


### Features

* **calendar:** design & logic updates ([#991](https://github.com/core-ds/core-components/issues/991)) ([358142c](https://github.com/core-ds/core-components/commit/358142c6d259e1463954139cc648787cdf461f76)), closes [#993](https://github.com/core-ds/core-components/issues/993) [#990](https://github.com/core-ds/core-components/issues/990)





# [5.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@5.2.0...@alfalab/core-components-vars@5.3.0) (2022-02-15)


### Features

* **vars:** updated typography ([#981](https://github.com/core-ds/core-components/issues/981)) ([95bcce8](https://github.com/core-ds/core-components/commit/95bcce8e07467c635e2a93c55edfb3550a533ba4))





# [5.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@5.1.1...@alfalab/core-components-vars@5.2.0) (2022-01-27)


### Features

* **vars:** build color-mod ([#953](https://github.com/core-ds/core-components/issues/953)) ([aa64366](https://github.com/core-ds/core-components/commit/aa64366d970be46776d23c9d13ebec413b2ac4d9))





## [5.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@5.1.0...@alfalab/core-components-vars@5.1.1) (2022-01-17)


### Bug Fixes

* **vars:** remove unused colors ([#945](https://github.com/core-ds/core-components/issues/945)) ([310a70a](https://github.com/core-ds/core-components/commit/310a70a8be6bff687861d3d643ebc347ecf6cd6d))





# [5.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@5.0.0...@alfalab/core-components-vars@5.1.0) (2021-12-09)


### Features

* **status:** добавлено 10% прозрачности в цвет фона ([#896](https://github.com/core-ds/core-components/issues/896)) ([b55c62b](https://github.com/core-ds/core-components/commit/b55c62b49cc52a15ff7497b9ad329773fba15959))





# [5.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@4.1.0...@alfalab/core-components-vars@5.0.0) (2021-11-26)


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





# [4.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@4.0.0...@alfalab/core-components-vars@4.1.0) (2021-09-16)


### Features

* **gallery:** add component ([#815](https://github.com/core-ds/core-components/issues/815)) ([7ffd20e](https://github.com/core-ds/core-components/commit/7ffd20e2d007f658223d29aa943639c13ad51342)), closes [#774](https://github.com/core-ds/core-components/issues/774) [#795](https://github.com/core-ds/core-components/issues/795)





# [4.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@3.1.1...@alfalab/core-components-vars@4.0.0) (2021-09-14)


### Features

* dark themes ([#778](https://github.com/core-ds/core-components/issues/778)) ([d848d16](https://github.com/core-ds/core-components/commit/d848d165b59182e6521d28efc2aadeecebc00d93))
* **vars:** updated colors and typography from latest alfa-ui-primitives ([#803](https://github.com/core-ds/core-components/issues/803)) ([0d5b2a3](https://github.com/core-ds/core-components/commit/0d5b2a30a78e70392dd505790a92bc3bc83f9386))


### BREAKING CHANGES

* remove dark-theme-injector. remove vars duplications





## [3.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@3.1.0...@alfalab/core-components-vars@3.1.1) (2021-08-23)


### Bug Fixes

* **input:** smart error icon ([#746](https://github.com/core-ds/core-components/issues/746)) ([f1950d6](https://github.com/core-ds/core-components/commit/f1950d6d516d17d993f0865c10390b6301bb2707)), closes [#782](https://github.com/core-ds/core-components/issues/782)





# [3.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@3.0.1...@alfalab/core-components-vars@3.1.0) (2021-08-04)


### Features

* add mods colors ([#770](https://github.com/core-ds/core-components/issues/770)) ([fe985f4](https://github.com/core-ds/core-components/commit/fe985f467b4d47a5152e168d2ab3846872d1a574))





## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@3.0.0...@alfalab/core-components-vars@3.0.1) (2021-07-19)

**Note:** Version bump only for package @alfalab/core-components-vars





# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.6.2...@alfalab/core-components-vars@3.0.0) (2021-07-09)


### Features

* **vars:** add border-radius-xs ([a4bd8ff](https://github.com/core-ds/core-components/commit/a4bd8ff44d9ed7cf68ca2b0994ab61a80ed358e2))
* upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))


## [2.6.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.6.1...@alfalab/core-components-vars@2.6.2) (2021-05-25)

**Note:** Version bump only for package @alfalab/core-components-vars





## [2.6.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.6.0...@alfalab/core-components-vars@2.6.1) (2021-04-26)

**Note:** Version bump only for package @alfalab/core-components-vars





# [2.6.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.5.2...@alfalab/core-components-vars@2.6.0) (2021-04-06)


### Features

* **vars:** fresh colors ([10907ec](https://github.com/core-ds/core-components/commit/10907eca0f5556795529a90b41d2bc663ea01dfe))





## [2.5.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.5.0...@alfalab/core-components-vars@2.5.2) (2021-03-18)


### Bug Fixes

* one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))





# [2.5.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.4.3...@alfalab/core-components-vars@2.5.0) (2021-03-15)


### Features

* **vars:** introducing border-radius vars ([1a6fb28](https://github.com/core-ds/core-components/commit/1a6fb287bcfab50048c3a9100645b4dee8cd3395))





## [2.4.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.4.2...@alfalab/core-components-vars@2.4.3) (2021-03-14)

**Note:** Version bump only for package @alfalab/core-components-vars





## [2.4.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.4.1...@alfalab/core-components-vars@2.4.2) (2021-03-04)

**Note:** Version bump only for package @alfalab/core-components-vars





## [2.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.4.0...@alfalab/core-components-vars@2.4.1) (2021-03-03)

**Note:** Version bump only for package @alfalab/core-components-vars





# [2.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.3.2...@alfalab/core-components-vars@2.4.0) (2021-03-03)


### Features

* **vars:** 2px gap ([#544](https://github.com/core-ds/core-components/issues/544)) ([e401782](https://github.com/core-ds/core-components/commit/e40178290a02c45bd9ea23ab0deffabd74a69276))





## [2.3.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.3.1...@alfalab/core-components-vars@2.3.2) (2021-02-20)

**Note:** Version bump only for package @alfalab/core-components-vars





## [2.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.3.0...@alfalab/core-components-vars@2.3.1) (2021-02-19)


### Bug Fixes

* **toast-plate:** polish toast-plate themes ([#527](https://github.com/core-ds/core-components/issues/527)) ([57d73d4](https://github.com/core-ds/core-components/commit/57d73d47b089997b2cc0d85e37b70f068c945e50))





# [2.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@2.2.0...@alfalab/core-components-vars@2.3.0) (2021-02-18)


### Features

* updated design tokens ([#516](https://github.com/core-ds/core-components/issues/516)) ([ef66b65](https://github.com/core-ds/core-components/commit/ef66b65bb35b2ef06292b8da709ccc335eb44735))





# [@alfalab/core-components-vars-v2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-vars@1.8.0...@alfalab/core-components-vars@2.0.0) (2020-11-25)


### Features

* remove extra vars, update docs ([#370](https://github.com/core-ds/core-components/issues/370)) ([af1b133](https://github.com/core-ds/core-components/commit/af1b1339e768e59a2377409bf164cc8c439bd3bf))


### BREAKING CHANGES

* remove packages/vars/src/breakpoints.css
