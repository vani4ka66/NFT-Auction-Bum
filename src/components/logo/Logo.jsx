import React from "react"

export default function Logo({type="default"}) {

  return (
    <div>
      {type === "default" && <img src="/images/logo.svg" />}
      {type === "muted" && <img src="/images/logo-muted.svg" />} 
     
</div>
  );
}

