# Clickly Backend Planning

## Scope
This document defines the current backend feature scope and data model for Clickly.
Only the features listed below are included in this phase.

## Authentication
- Register
  - Save user data
  - Return authentication token
- Login
  - Validate user credentials
  - Return authentication token
- Logout
  - Invalidate authentication token
- OTP-based registration and login

## Posts
- Create post
- View feed
- Like post
- Save post

## Users
- View profile
- Follow user
- Unfollow user
- View followers
- View following
- View saved posts

## Database Models
- User
  - `username`
  - `email`
  - `password`
  - `bio`
  - `profileImage`
  - `postCount`
  - `followersCount`
  - `followingCount`
- Post
- Like
- Follow
- Save
