import styled from "styled-components";
import React, { useContext } from "react";
import { UserContext } from "../layouts/MainLayout";

const StyledTable = styled.table`
    border-collapse: collapse;
    th, tr, td {
        padding: 10px;
        border: 1px solid ${props => props.theme.textColor};
    }
    `;

const StyledDiv = styled.div`
    background-color: lightgray;
    background-color: ${props => props.theme.divColor};
    width: fit-content;
    border-radius: 5px;
    padding: 10px;
    ul {
    padding-left: 25px;
}
`;

const StyledList = styled.ul`
    list-style-type: "- ";
`;

const StyledPre = styled.pre` //supposed to match the basic <p> tag
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
    font-family: 'Times New Roman', Times, serif;
    white-space: none;
`;

function Documentation() {
    const { activeTheme } = useContext(UserContext);
    return (
    <>
    <h1>Documentation music REST API</h1>
        <p>When there is a (1), (2), (3) or (4) it refers to the corresponding request body or response format. And if it says (e1), (e2) and so on then it correspondes to the matching error format at the bottom of the documentation.</p>
        <StyledTable theme={activeTheme}>
            <tr>
                <th>Method</th>
                <th>URL</th>
                <th>Request body</th>
                <th>Response</th>
                <th>Error</th>
                <th>AccessLevel</th>
            </tr>
            <tr>
                <td>POST</td>
                <td>/api/auth/register</td>
                <td>user(1)</td>
                <td></td>
                <td>(e1, e2)</td>
                <td>Anyone</td>
            </tr>
            <tr>
                <td>POST</td>
                <td>/api/auth/login</td>
                <td>user(1)</td>
                <td></td>
                <td>(e1, e3)</td>
                <td>Anyone</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/api/protected/user_demo</td>
                <td></td>
                <td><StyledPre>{`{ msg: “Hello from USER Protected” }`}</StyledPre></td>
                <td></td>
                <td>User</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/api/protected/admin_demo</td>
                <td></td>
                <td><StyledPre>{`{ msg: “Hello from ADMIN Protected” }`}</StyledPre></td>
                <td></td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/api/artists</td>
                <td></td>
                <td><StyledPre>{`[artist, artist, …](2)`}</StyledPre></td>
                <td></td>
                <td>Anyone User</td>
            </tr>
            <tr>
                <td>GET</td>
                <td><StyledPre>{`/api/artists/{id}`}</StyledPre></td>
                <td></td>
                <td>artist(2)</td>
                <td>(e4)</td>
                <td>Anyone User</td>
            </tr>
            <tr>
                <td>POST</td>
                <td>/api/artists</td>
                <td>artist(2) without id</td>
                <td>artist(2)</td>
                <td>(e5, e6)</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>UPDATE</td>
                <td><StyledPre>{`/api/artists/{id}`}</StyledPre></td>
                <td>artist(2) without id</td>
                <td>artist(2)</td>
                <td>(e6)</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td><StyledPre>{`/api/artists/{id}`}</StyledPre></td>
                <td></td>
                <td>NO CONTENT</td>
                <td>(e4, e6)</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/api/albums</td>
                <td></td>
                <td><StyledPre>{`[album, album, …](3)`}</StyledPre></td>
                <td></td>
                <td>Aynone User</td>
            </tr>
            <tr>
                <td>GET</td>
                <td><StyledPre>{`/api/albums/{id}`}</StyledPre></td>
                <td></td>
                <td>album (3)</td>
                <td>(e4)</td>
                <td>Anyone User</td>
            </tr>
            <tr>
                <td>POST</td>
                <td>/api/albums</td>
                <td>album (3) without id</td>
                <td>album(3)</td>
                <td>(e5, e6)</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>UPDATE</td>
                <td><StyledPre>{`/api/albums/{id}`}</StyledPre></td>
                <td>album (3) without id</td>
                <td>album(3)</td>
                <td>(e6)</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td><StyledPre>{`/api/albums/{id}`}</StyledPre></td>
                <td></td>
                <td>NO CONTENT</td>
                <td>(e4, e6)</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/api/songs</td>
                <td></td>
                <td><StyledPre>{`[song, song, …] (4)`}</StyledPre></td>
                <td></td>
                <td>Anyone User</td>
            </tr>
            <tr>
                <td>GET</td>
                <td><StyledPre>{`/api/songs/{id}`}</StyledPre></td>
                <td></td>
                <td>song(4)</td>
                <td>(e4)</td>
                <td>Anyone User</td>
            </tr>
            <tr>
                <td>POST</td>
                <td>/api/songs</td>
                <td>song (4) without id</td>
                <td>song(4)</td>
                <td>(e5, e6)</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>UPDATE</td>
                <td><StyledPre>{`/api/songs/{id}`}</StyledPre></td>
                <td>song (4) without id</td>
                <td>song(4)</td>
                <td>(e6)</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td><StyledPre>{`/api/songs/{id}`}</StyledPre></td>
                <td></td>
                <td>NO CONTENT</td>
                <td>(e4, e6)</td>
                <td>Admin</td>
            </tr>
        </StyledTable>

        <br />

        <h2>Request Body and Response Formats</h2>
        <p>(1) User format</p>
        <StyledDiv theme={activeTheme}>
            <pre>{` {
    "username": String,
    "password": String,
    “roles”: [
               {
                “name”: “USER”		// or ADMIN
               }              
            ]
  }
`}</pre>
        </StyledDiv>
        <br />
        <p>(2) Artist format</p>
        <StyledDiv theme={activeTheme}>
            <pre>{` {
    "artistId": Number
    "name": String,
    "type": String
  }
`}</pre>
        </StyledDiv>
        <br />
        <p>(3) Album format</p>
        <StyledDiv theme={activeTheme}>
        <pre>{`{
  "albumId": String,
  “albumSearchId”: String,
  "name": String,
  "type": String,
  “total_tracks”: Number,
  “release_date”: String,
  "artists": [
    {
      "artistId": Number,
      "name": String,
	“type”: String
	}
     ],
      "tracks": {
	  “items”: [
        {
          "songId": String,
          "songSearchId": String,
          "name": String,
          "type": String,
          "track_number": Number
        }
      ]
   }
}
`}</pre>
        </StyledDiv>
        <br />
        <p>(4) Song format</p>
        <StyledDiv theme={activeTheme}>
        <pre>{`{
    "songId": String,
    "songSearchId": String,
    "name": String,
    "type": String,
    "track_number": Number
}
`}</pre>
        </StyledDiv>

        <br />

        <h2>Errors</h2>
        <p>(e) All errors are reported using this format (with the HTTP-status code matching the number)</p>
        <StyledPre>{`{ status : statusCode, "msg": "Explains the problem" }`}</StyledPre>
        <StyledDiv  theme={activeTheme}>
        <StyledList>
            <li><pre>{`(e1) : { status : 401, "msg": "No user found with username: XX " }`}</pre></li>
            <li><pre>{`(e2) : { status : 409, “msg”: "User with username XX already exists" }`}</pre></li>
            <li><pre>{`(e3) : { status : 401, “msg”: "Login failed. Wrong password" }`}</pre></li>
            <li><pre>{`(e4) : { status : 404, “msg”: "No (artist/album/song) with id XX found" }`}</pre></li>
            <li><pre>{`(e5) : { status : 400, “msg”: "Missing required field" }`}</pre></li>
            <li><pre>{`(e6) : { status : 401, Authorization header malformed }`}</pre></li>
        </StyledList>
        </StyledDiv>
    </>
);
}

export default Documentation;