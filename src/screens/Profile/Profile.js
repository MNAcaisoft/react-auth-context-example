import React, { useContext } from "react";
import { AuthContext, AuthConsumer } from "../../contexts/AuthContext";

// export const Profile = () => {
//   const auth = useContext(AuthContext);

//   return (
//     <div>
//       {auth.isAuthenticated ? (
//         <div>
//           Hello, <b>{auth.user.name}</b>
//           <button type="button" onClick={auth.logout}>
//             Log out
//           </button>
//         </div>
//       ) : (
//         <button
//           type="button"
//           onClick={() => auth.login("gracjan@example.com", "test123")}
//         >
//           Log in
//         </button>
//       )}
//     </div>
//   );
// };

export class Profile extends React.Component {
  render() {
    return (
      <div>
        <AuthConsumer>
          {auth =>
            auth.isAuthenticated ? (
              <div>
                Hello, <b>{auth.user.name}</b>
                <button type="button" onClick={auth.logout}>
                  Log out
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => auth.login("gracjan@example.com", "test123")}
              >
                Log in
              </button>
            )
          }
        </AuthConsumer>
      </div>
    );
  }
}

export default Profile;
