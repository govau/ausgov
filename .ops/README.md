> The basic auth credentials required for the staging environment are PGP
> encrypted with the public keys shown below.

# Installation

```bash
# Windows
See: https://www.gnupg.org/download/

# MacOS
brew instal gnupg

# Ubuntu 18.04
sudo apt install gpg
```

# Configuration

In order to create a new PGP keypair with `gnupg`

```
gpg --full-generate-key
```

-   Please select what kind of key you want: `RSA and RSA (default)`
-   What keysize do you want?: `4096`
-   Please specify how long the key should be valid: `0`
-   Real name: `<YOUR NAME>`
-   E-mail address: `<YOUR.NAME>@digital.gov.au`

# Encryption

To grant a new user access to this file simply add their PUBLIC PGP key to
the command listed below and using `gpg` or equivilent:

```bash
cd .ops/

gpg -e \
-r 389639C5833B44301748C702180195DA764B80DD \
staging_password.txt
```

# Decryption

```bash
cd .ops/
gpg -d env_staging.txt.gpg # Will print to stdout
```
