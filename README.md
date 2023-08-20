<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[OpenAPI (Cloudflare)](https://developers.cloudflare.com/api/) module for [Nest](https://github.com/nestjs/nest).

## Installation

```bash
$ npm i --save npm i @cin12211nestjs-cloudflare 

$ yarn add @cin12211nestjs-cloudflare 

$ pnpm add @cin12211nestjs-cloudflare
```

## Quick Start

### API Keys

Set your account email address and API key.  The API key can be found on
the [My Profile -> API Tokens][api-tokens] page in the Cloudflare dashboard.

[api-tokens]: https://dash.cloudflare.com/profile/api-tokens

```typescript
import { Module } from '@nestjs/common';
import {CloudflareModule} from "@cin12211/nestjs-cloudflare"

@Module({
  imports: [
     ...,
     CloudflareModule.forRoot({
      key: process.env.CLOUDFLARE_API_KEY as string,
      email: process.env.CLOUDFLARE_EMAIL as string,
    }),
    ...,
  ],
})
export class AppModule {}

```


### API Tokens (BETA)

Create your token on the [My Profile -> API Tokens][api-tokens] page in the Cloudflare dashboard.

[api-tokens]: https://dash.cloudflare.com/profile/api-tokens

```typescript
import { Module } from '@nestjs/common';
import {CloudflareModule} from "@cin12211/nestjs-cloudflare"

@Module({
  imports: [
     ...,
     CloudflareModule.forRoot({
      token: process.env.CLOUDFLARE_TOKEN as string,
    }),
    ...,
  ],
})
export class AppModule {}

```


### Usage

```typescript
import { Injectable } from '@nestjs/common';
import {CloudflareService} from "@cin12211/nestjs-cloudflare"


@Injectable()
export class YourService {
  constructor(
    private readonly cloudflare:CloudflareService,
  ) {}
  
    async getZones(){
        return await this.cloudflare.zones.browse()
    }

    async getZone(zoneId:string){
        return await this.cloudflare.zones.read(zoneId)
    }

    // get zone dns records
    async getZoneDnsRecords(zoneId:string){
        return await this.cloudflare.dnsRecords.browse(zoneId)
    }

    ...
}
```


## Features

- `Zones`
- `DNS records for a zone`


## Stay in touch

- Author - [Cinny](https://github.com/cin12211)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments
* [Cloudflare API](https://developers.cloudflare.com/api/)
* [Core-package](https://github.com/cloudflare/node-cloudflare)