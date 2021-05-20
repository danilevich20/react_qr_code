import * as React from "react";
import QRCode from "qrcode";

function QRGenerator({ qrCode }) {
  const [code, setCode] = React.useState(qrCode);

  React.useLayoutEffect(() => {
    QRCode.toDataURL(qrCode, {
      errorCorrectionLevel: "H",
      width: 500
    }).then(setCode);
  }, [qrCode]);

  return <img src={code} alt="QR Code" />;
}

export default QRGenerator;
