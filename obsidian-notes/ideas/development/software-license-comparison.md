---
type: note
template-version: 1
title: Software license comparison
created: 2026-01-19 02:33
aliases:
  - Software license comparison
tags:
  - development
  - software
navigate-up:
  - "[[Software Development]]"
  - "[[software-main|Software]]"
edit-status: complete
description: Comparison of the three major open source software licenses
scope: public
---
# Software license comparison

The MIT License and Apache 2.0 are **permissive** licenses allowing proprietary use with minimal obligations, while GPLv3 is a **copyleft** license that requires derivative works to remain open source under GPLv3 terms. Apache 2.0 additionally includes an explicit patent grant and conditions, which MIT lacks, and GPLv3 has the strongest reciprocity requirements of the three.

## License type and philosophy
- MIT is a short, permissive license letting you do almost anything (use, modify, sublicense, sell) as long as you keep the copyright and license notice.
- Apache 2.0 is also permissive but more detailed, designed to encourage collaboration while adding explicit patent and notice terms
- GPLv3 is a strong copyleft license intended to ensure that modified versions and combined works remain free and open source under GPLv3

## Copyleft vs permissive behavior
- MIT and Apache 2.0 allow incorporation into closed‑source or proprietary products without an obligation to release your own code, provided you satisfy attribution and notice requirements​
- GPLv3 requires that if you distribute a program that is a derivative of GPLv3 code, you must provide complete corresponding source under GPLv3, including your modifications
- GPLv3’s copyleft can also "infect" combined works, meaning some mixed projects must be released entirely under GPLv3 when distributed

## Patent grants and protection
- MIT does not contain an explicit patent grant; it is mainly about copyright permission and warranty disclaimer, leaving patent questions more ambiguous
- Apache 2.0 includes an explicit perpetual, worldwide, royalty‑free patent license from contributors, plus termination if you initiate patent litigation based on their contributions.
- GPLv3 adds provisions to address software patents and anti‑tivoization, aiming to prevent patent deals or hardware restrictions from undermining users' freedom to modify and run the software

## Attribution, notices, and conditions
- MIT’s main obligations are to keep the copyright and license text in copies or substantial portions of the software and accept the "as is" warranty disclaimer
- Apache 2.0 requires preserving copyright, license text, and `NOTICE` file, and marking significant changes, along with specific attribution language in redistributed works
- GPLv3 requires providing the license text and ensuring users receive or can obtain the full corresponding source code under GPLv3, along with notices of changes

## Compatibility and typical use cases

| Aspect                  | MIT License                           | Apache License 2.0                               | GNU GPLv3                                           |
| ----------------------- | ------------------------------------- | ------------------------------------------------ | --------------------------------------------------- |
| License type            | Permissive                            | Permissive with explicit patent terms​           | Strong copyleft                                     |
| Proprietary use allowed | Yes, with attribution​                | Yes, with attribution and `NOTICE` file​           | Only if whole derivative is GPLv3 when distributed​ |
| Patent grant            | Not explicit                          | Explicit patent license and termination​         | Addresses patents and patent deals​                 |
| GPL compatibility       | Generally compatible with GPLv3​      | Compatible with GPLv3 but not GPLv2              | N/A (the reference license)​                        |
| Typical choice when...  | You want maximal simplicity and reuse | You want permissive reuse plus patent protection | You want to enforce openness of derivatives​        |

For a commercial‑friendly library that you are fine with being bundled into closed‑source apps, MIT or Apache 2.0 are usually preferred, with Apache 2.0 favored when patent protection matters; if the goal is to ensure improvements stay open, GPLv3 is more appropriate.[^exygy]

[^exygy]: https://www.exygy.com/blog/which-license-should-i-use-mit-vs-apache-vs-gpl

---

## 📝 Notes
