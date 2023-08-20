import { Inject, Injectable } from "@nestjs/common";
import Cloudflare = require("cloudflare");

@Injectable()
export class CloudflareService extends Cloudflare {
  constructor(
    @Inject("INIT_CLOUDFLARE")
    readonly options: Cloudflare.AuthObject
  ) {
    super(options);
  }
}
