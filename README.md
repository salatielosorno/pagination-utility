# Pagination Utility
[![npm](https://img.shields.io/npm/v/pagination-utility?color=green&style=flat-square)](https://www.npmjs.com/package/pagination-utility)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Intro 
Pagination Utility is based on the KISS (Keep it Simple, Stupid) principle. It is a simple library which can help you out to make pagination functionality in an easy way.

## Install

```bash
$ npm install pagination-utility --save
```

## Usage

```javascript
import { PaginationUtility } from 'pagination-utility';

// @returns { limit, offset }
const { limit, offset } = PaginationUtility.getValuesToPaginate({ currentPage: 1, perPage: 10 });

// Do stuff...
// - Get collection from database using limit and offset (this should return the total of items, it will be used in the next step)

// @return totalPages
const totalPages = PaginationUtility.getTotalPages({ totalItems: 4872, perPage: 10 })

// return
// {
//    collection,
//    currentPage,
//    perPage,
//    totalPages
// }
```

## License

[![NPM](https://img.shields.io/npm/l/pagination-utility?color=red&style=flat-square)](https://opensource.org/licenses/MIT)