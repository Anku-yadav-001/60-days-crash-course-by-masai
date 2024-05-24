# Ticketing System assigment 

## Instructions
Using the following tools and technologies: React (`useState`, `useContext`, `useEffect`, `useRef`), Chakra UI, React Router, and Axios, your task is to build a web application with the following features:

#### Note:
 use json-server(`https://github.com/typicode/json-server`) as backend server since we don't have actual backend here

#### The web application should have multiple pages:

1. Home
2. About
3. Contact
4. Tickets
5. Ticket View
6. Ticket Create
7. Ticket Edit
8. Login

The Navbar should be visible on all pages and include links to Home, About, Contact, Tickets, and Login. It should also have a LOGOUT button that logs out the user and redirects to the login page. The LOGOUT button should only be visible when the user is logged in.

All pages except the Login page should be accessible only to logged-in users. If a user is not logged in, they should be redirected to the login page. This means that only the Login Page is a public route, while all other pages are private routes.

1. Home Page: Create a visually appealing UI similar to this.
`https://www.usegalileo.ai/d/547ab821-3c49-4f02-a049-c348bb49bf70` 

2. About Page: Create a visually appealing UI similar to this.
`https://www.usegalileo.ai/d/f24fec66-357d-40f0-84b9-23d86161a3cf`

3. Contact Us Page: Use this page as a reference to build the Contact Us page.
`https://masaischool.com/contact`

4. Tickets Page: This page should include a `Create Ticket` button at the top right, which redirects to the T`icket Create` page. Display a list of tickets as cards in a grid layout:

    3 cards per row for large screens and above
    2 cards per row for medium screens and above
    1 card per row for small screens

Each ticket card should display the `Title`, `Status`, and `Priority`, and include a `View` button that redirects to the `Ticket View` page. Include three select buttons for `sorting` and `filtering` tickets:

Sort by Priority with values "`Low to High`" and "`High to Low`"
Filter by Status with values "`Pending`", "`Progress`", and "`Completed`"
The tickets should be rearranged based on the selected sort and filter criteria.

5. Ticket View Page: Display all details of a ticket, including `Title`, `Description`, `Assignee`, `Status`, and `Priority`. Include `Edit` and `Delete` buttons:

The `Edit` button redirects to the `Ticket Edit` page.
The `Delete` button deletes the ticket and redirects to the` Tickets` page.

6. Ticket Create Page: Include the following elements to create a new ticket:

    Input box for Title
    TextArea for Description
    Select box for Assignee details (values: names of assignees)
    Select box for Status (values: "Pending", "Progress", "Completed")
    Select box for Priority level (values: 0 to 9)
    Create Ticket button to submit the form, making a POST request to update the ticket information on both the server and client. Redirect to the Tickets page upon successful creation.

7. Ticket Edit Page: Include the following elements with pre-filled values for the ticket being edited:

    Input box for Title
    TextArea for Description
    Select box for Assignee details (values: names of assignees)
    Select box for Status (values: "Pending", "Progress", "Completed")
    Select box for Priority level (values: 0 to 9)
    Edit Ticket button to submit the form, making a PUT request to update the ticket information on both the server and client. Redirect to the Tickets page upon successful update.

8. Login Page: This page will contain the following elements:

    Input box for email
    Input box for password
    Login button which will make a POST request to the API endpoint https://reqres.in/api/login. If the request is successful, it will redirect to the Home page. If the request is unsuccessful, it will display an error message. The successful response returns a token, which can be saved in the AuthContext. Maintain a context to keep track of isLoggedIn and token.

    