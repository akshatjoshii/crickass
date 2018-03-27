# Crickass 🎮




## Table of Contents

1. [Getting Started](#getting-started)
2. [Pages](#pages)
3. [Providers](#providers)

## <a name="getting-started"></a>Getting Started

To test this starter out, install the latest version of the Ionic CLI and run:

```bash
ionic start mySuperApp super
```

## Pages


The entry and main pages can be configured easily by updating the corresponding
variables in
[src/pages/pages.ts](https://github.com/ionic-team/starters/blob/master/ionic-angular/official/super/src/pages/pages.ts).

Please read the
[Pages](https://github.com/ionic-team/starters/tree/master/ionic-angular/official/super/src/pages)
readme, and the readme for each page in the source for more documentation on
each.

## Providers

Some basic implementations of common providers.

### User

The `User` provider is used to authenticate users through its
`login(accountInfo)` and `signup(accountInfo)` methods, which perform `POST`
requests to an API endpoint that you will need to configure.

### Api

The `Api` provider is a simple CRUD frontend to an API. Simply put the root of
your API url in the Api class and call get/post/put/patch/delete 


