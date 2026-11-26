# Sri Balaji Technologies

A responsive catalogue and WhatsApp order inquiry site for Sri Balaji Technologies, Coimbatore. Product and workshop images are screenshots supplied by the project owner and shown through SVG viewBox crops; the original files are retained in `assets/`.

## Ordering

Customers select products and quantities, enter contact details only when opening the order dialog, and review a prefilled WhatsApp message before sending it to the business. The site does not collect payment, store orders, or send the message automatically. Prices and availability must be confirmed directly with the business.

## Google sign in

Optional Google Identity Services appears only in the order dialog. Set `GOOGLE_CLIENT_ID` in Vercel for Production and Preview. In Google Cloud Console, create a Web application OAuth client, add the deployed site's HTTPS origin to Authorized JavaScript origins, and paste that client ID into Vercel. `/api/verify-google` checks the credential with Google and returns only the verified name and email. No identity token or account data is stored. Without the client ID, buyers can enter contact details manually.

The company details follow the supplied IndiaMART screenshots. The CEO name is corrected to P. Vijay Kumar. Historical certificate imagery is not used to claim current certification.
