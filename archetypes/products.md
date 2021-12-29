---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true

# meta description
description : ""

# product Price
price: ""
priceBefore: ""

# Product Short Description
shortDescription: ""

#product ID
productID: {{ mul 1000 (time .Date).Unix }}

# type must be "products"
type: "products"

# product Images
# first image will be shown in the product page
images:
  - image: ""
  - image: ""
  - image: ""
  - image: ""
---