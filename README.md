<h1>Express Backend using TypeScript</h1>

<h2>Overview</h2>
<p>This is a RESTfull API, doing the CRUD operations. Here, a user can register, login. User cal also update and delete their credentials. For user authentication and authectication, the bulit-in crypto module of Node has been used.</p>

<br>

<h2>Technologies</h2>
<ul>
    <li>Node js</li>
    <li>Express Js</li>
    <li>TypeScript</li>
</ul>

<br>

<h2>Environmental Variables</h2>
<div>
    <p>PORT=8080</p>
    <p>DB_URL="your database url"</p>
</div>

<br>

<h2>Usage</h2>
<ul>
   <li>
       Clone the repository. <br>
       <span style="background-color: #595959">git clone https://github.com/MdMahdiHasanTazelly/Express_TypeScript_Backend_API</span>
   </li>

   <li>
       Set all the environmental variables.
   </li>

   <li>
       Navigate to the main project folder and start the development server. <br>
       <span style="background-color: #595959">npm run dev</span>
   </li>
</ul>

<br>

<h2>API Endpoints </h2>
<table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
        <th>Auth Required</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td>POST</td>
          <td>/auth/register</td>
          <td>Registers user</td>
          <td>No</td>
        </tr>
         <tr>
          <td>POST</td>
          <td>/auth/login</td>
          <td>Login user</td>
          <td>No</td>
        </tr>
         <tr>
          <td>GET</td>
          <td>/user/all</td>
          <td>Fetches all users</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>DELETE</td>
          <td>/user/:id</td>
          <td>Deletes a cetain user</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>PATCH</td>
          <td>/user/:id</td>
          <td>Updates user's info</td>
          <td>Yes</td>
        </tr>
    </tbody>
</table>






   



