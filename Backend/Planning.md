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
- Post
  - `user`
  - `imgUrl`
  - `caption`
- Like
- Follow
- Save


## Full Stack Development Process
1. New feature planning and design
2. Backend API
3. Backend Logic
4. Database Setup
5. Frontend implementation
6. Integration
7. Testing
8. Debugging
9. Stack Overflow and Google search for any issues
10. Fixing bugs
11. Optimization
12. Fixed !!!
13. Deploying to production
14. Production Bugs !!!!!!!!!!!!!!!!!!!!!!
15. Repeat steps 7-14 until the project is complete and stable
16. Release the project to the public
17. Maintain the project and fix any bugs that arise