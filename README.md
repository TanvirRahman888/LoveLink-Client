# Love Link

Love Link is a web application designed to facilitate the creation and management of biodata profiles for matchmaking. It includes features for both users and administrators, enabling a comprehensive and user-friendly experience.

## Admin Credentials

- **Email:** admin@lovelink.com
- **Password:** AAaa!!11

## Live Site

You can visit the live site at [Love Link](https://lovelink-d8a3d.web.app/)

## Features

1. **User Authentication:** Secure login and registration system with email verification.
2. **Profile Management:** Users can view, edit, and manage their profiles effortlessly.
3. **Biodata Creation:** Users can create detailed biodata entries including personal details and preferences.
4. **Admin Dashboard:** Administrative interface for managing users and biodata entries.
5. **Wishlist Functionality:** Users can add profiles to their wishlist for easy reference.
6. **Gender-specific Biodata:** View male and female biodata separately for focused browsing.
7. **Responsive Design:** Fully responsive design ensures usability across devices, including desktops, tablets, and mobile phones.
8. **Profile Search:** Users can search for specific profiles using various filters.
9. **Contact Requests:** Manage contact requests directly from the dashboard.
10. **Real-time Notifications:** Get real-time updates and notifications on profile views and messages.

## Installation

To set up the project locally, follow these steps:

1. **Client Site repository:**
    ```sh
    https://github.com/programming-hero-web-course1/b9a12-client-side-TanvirRahman888
   
    ```
1. **Server Site repository:**
    ```sh
    https://github.com/programming-hero-web-course1/b9a12-server-side-TanvirRahman888
   
    ```



### Login and Registration

- Navigate to `/login` to log in with your credentials.
- Navigate to `/register` to create a new account.

### Dashboard

- The dashboard is a protected route and can be accessed after logging in. It includes various functionalities for both users and administrators.

## Routes

The application uses React Router for navigation. Below are the main routes:

### Public Routes
- `/`: Home page
- `/login`: Login page
- `/register`: Registration page
- `/aboutus`: About Us page
- `/contactus`: Contact Us page

### Private Routes
- `/private`: A private route accessible only to logged-in users.
- `/biodata`: List of biodata entries
- `/biodata/:id`: Detailed view of a specific biodata entry

### Dashboard Routes (Protected)
- `/dashboard`: Main dashboard page (Wishlist)
- `/dashboard/myprofile`: View and edit user profile
- `/dashboard/editprofile`: Edit user profile
- `/dashboard/dashboard`: Admin dashboard
- `/dashboard/alluser`: View all users (Admin)
- `/dashboard/allbiodata`: View all biodata entries (Admin)
- `/dashboard/addbiodata`: Add new biodata (Admin)
- `/dashboard/malebiodata`: View male biodata entries (Admin)
- `/dashboard/femalebiodata`: View female biodata entries (Admin)



### Contact
For any inquiries or issues, please contact [tanvirrahman8888@gmail.com](mailto:tanvirrahman8888@gmail.com).
