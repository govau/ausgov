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
-r 389639C5833B44301748C702180195DA764B80DD \   # adam.zerella@digital.gov.au
-r 47B9EF136946346F92C569A1ED0B82C16E473EA9 \   # sukhraj.ghuman@digital.gov.au
-r 005550D674B0D476AF3A05F95A2BD6C509BBD282 \   # brendan.ng@digital.gov.au
env_staging.txt
```

# Decryption

```bash
cd .ops/
gpg -d env_staging.txt.gpg # Will print to stdout
```
