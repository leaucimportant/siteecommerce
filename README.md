# eCommerce Angular Project

This is a sample README file for an eCommerce project built with Angular.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

Provide a brief overview of your eCommerce Angular project. Explain what it does, its purpose, and any unique features or technologies used.

## Features

List the key features of your eCommerce Angular project. This can include things like:

- User authentication and authorization
- Product catalog with search and filtering
- Shopping cart functionality
- Order management
- Payment integration
- Admin dashboard

## Installation

L'installation passe par docker, exécuter les commandes ci-dessous pour lancer le site web.

```
docker build -t siteweb_ecommerce  .       
docker run -p 80:5000 --name siteweb_ecommerce -d siteweb_ecommerce
```
