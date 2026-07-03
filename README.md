# 📦 StockFlow - Multi-Tenant SaaS Inventory Management System
admin_user:harish
pwd:harish@1234
## Overview

StockFlow is a full-stack **Multi-Tenant SaaS Inventory Management System** built using **Django REST Framework**, **React.js**, and **MySQL**. The application enables organizations to securely manage their inventory through organization-based data isolation, ensuring that each organization's data remains private and accessible only to its authorized users.

This project was developed as a technical assessment to demonstrate full-stack development skills, REST API design, JWT authentication, database modeling, and scalable application architecture.

---

## Features

### Authentication

* User Registration
* Secure Login using JWT Authentication
* Protected API Endpoints
* Role-based organization access

### Multi-Tenant Architecture

* Organization-based data isolation
* One organization created during user registration
* Users can only access data belonging to their organization

### Product Management

* Create Products
* View Products
* Update Products
* Delete Products
* Product search by Name or SKU

### Inventory Management

* Track available stock
* Maintain Cost Price and Selling Price
* Configure Product-wise Low Stock Threshold

### Dashboard

* Total Products
* Total Inventory Quantity
* Low Stock Products
* Inventory Summary

### Organization Settings

* Configure Default Low Stock Threshold
* Automatically apply default threshold when a product-specific threshold is not provided

---

## Technology Stack

### Backend

* Python
* Django
* Django REST Framework
* JWT Authentication (SimpleJWT)
* MySQL

### Frontend

* React.js
* React Router
* Axios
* Bootstrap

### Database

* MySQL

---

## Project Structure

```
stockflow/

├── backend/
│   ├── accounts/
│   ├── organization/
│   ├── inventory/
│   ├── config/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── README.md
└── .gitignore
```

---

## Database Design

### Organization

* Name
* Default Low Stock Threshold

### User

* Username
* Email
* Password
* Organization

### Product

* Name
* SKU
* Description
* Quantity
* Cost Price
* Selling Price
* Low Stock Threshold
* Organization

---

## API Modules

### Authentication

* User Registration
* User Login
* JWT Token Refresh

### Inventory

* Product CRUD Operations
* Product Search
* Inventory Management

### Dashboard

* Inventory Summary
* Low Stock Products
* Total Products
* Total Quantity

### Organization

* Organization Details
* Default Low Stock Threshold

---

## Security

* JWT Authentication
* Protected Routes
* Organization-based Data Isolation
* Secure Password Hashing
* Input Validation

---

## Future Enhancements

* Multi-user organizations
* Categories
* Suppliers
* Purchase Orders
* Stock Movement History
* Barcode Support
* Product Images
* Email Notifications
* CSV Import & Export
* Reports & Analytics

---

## Getting Started

### Backend

```bash
cd backend

python -m venv env

env\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

### Frontend

```bash
cd frontend

npm install

npm start
```

---

## Author

**Harish Krishnapuram**

GitHub: https://github.com/harish-krishnapuram
