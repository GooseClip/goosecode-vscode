# Starting Extension Server

## Start Automatically

If you have enabled `Start Automatically` in the extension settings from the previous step, GooseCode will run every time you open Visual Studio Code.
> default: `false` recommend: `true`

<br/>

## Security

GooseCode is designed to be secure.

GooseCode will only allow connections from the same machine by default, is TLS encrypted in-flight, and requires a
password to connect.
If you want to connect from another device, you will need to disable `Localhost Only` in the settings.

GooseCode encrypts all data in-flight and at rest and files and media are only stored on your machine by default.

If `Cloud Sync` is enabled in the GooseCode settings page, your data is AES256 encrypted with a personal encryption key,
which is again encrypted by a master key, then of course the blob storage has its own encryption at rest.

<br/>

