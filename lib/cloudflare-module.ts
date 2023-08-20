import { Module, DynamicModule, Global } from "@nestjs/common";
import * as Cloudflare from "cloudflare";
import { CloudflareService } from "./cloudflare-service";

@Module({})
@Global()
export class CloudflareModule {
  static forRoot(options: Cloudflare.AuthObject): DynamicModule {
    return {
      module: CloudflareModule,
      providers: [
        {
          provide: "INIT_CLOUDFLARE",
          useValue: options
        },
        CloudflareService
      ],
      exports: [CloudflareService]
    };
  }
}
