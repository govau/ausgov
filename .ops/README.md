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

# Will write to stdout
gpg -d env_staging.txt.gpg

# Will write to a file 'env_staging.txt'
gpg -d env_staging.txt.gpg > env_staging.txt
```

# Sharing your key

Sharing a PGP key can be done using a central keyserver or manually sharing the public key.
The public keys of everybody who the parties looking to decrypt the file need to be imported by whomever is encrypting the file.

## Obtaining your public key

```bash
# List your PUBLIC key(s)
gpg -k

# List your PRIVATE key(s)
gpg -K
```

### Sample output:

```
pub rsa4096 2018-07-06 [SC]
    389639C5831513301748C702180195DA764B80DD
uid [ultimate] Bob Smith <bob.smith@digital.gov.au>
sub rsa4096 2018-07-06 [E]
```

> In this example **389639C5831513301748C702180195DA764B80DD** is the public key

## Exporting

```bash
# Exports ALL public keys from your keychain.
gpg --export > my_public_keys.asc

# Exports specific public key
gpg --export 389639C5831513301748C702180195DA764B80DD > my_public_key.asc

# Exports specific public key as ASCII PGP public key block
gpg --export --armor 389639C5831513301748C702180195DA764B80DD > my_public_key.txt
```

## Importing

```bash
gpg --import <key>
```
