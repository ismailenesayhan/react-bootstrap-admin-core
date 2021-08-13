import React from "react";
import PageTitle from "../components/PageTitle";

export default function Posts() {
  return (
    <>
      <div className="mt-1 d-flex justify-content-between align-items-baseline">
        <PageTitle title="Posts" desc="Welcome, İsmail Enes Ayhan" />
        <div className="bg-white rounded-lg shadow-sm p-3 ">
          <h6 className="mb-0 text-center">E-Seller Assist 21</h6>
        </div>
      </div>
      <div className="screenBody">
        <h5>List</h5>
        <p>ismailenesayhan.com</p>

        <div id="lipsum">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
            tincidunt mi. Phasellus nec euismod nisi, eu semper turpis. Donec
            commodo elementum nunc ut porttitor. Pellentesque nec justo diam.
            Etiam velit tortor, posuere feugiat sem non, cursus ultrices augue.
            Sed ullamcorper arcu sit amet sem lobortis rutrum. Duis rutrum nunc
            ac faucibus lobortis. Nam quis nulla posuere, fermentum lacus
            tincidunt, aliquam mauris. Etiam vitae quam enim. In hac habitasse
            platea dictumst. In a malesuada turpis, et tempor nibh. Vivamus
            maximus mollis erat ac luctus. Nam at sapien dignissim, fringilla
            lorem in, faucibus massa.
          </p>          
        </div>
      </div>
    </>
  );
}
