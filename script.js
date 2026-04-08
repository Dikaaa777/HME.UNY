/* POPUP */
.popup{
  position:fixed;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.6);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:2000;
}

.popup-content{
  background:#fff;
  padding:40px;
  border-radius:16px;
  text-align:center;
}

.popup img{
  width:100px;
}

/* SLIDER */
.slider{
  display:flex;
  gap:15px;
  overflow-x:auto;
  margin-top:40px;
}

.slide{
  min-width:250px;
  padding:15px;
  border-radius:12px;
  background:#f8fafc;
  transition:0.3s;
}

.slide:hover{
  transform:translateY(-3px);
}

/* CONTACT */
.contact-box{
  display:flex;
  justify-content:center;
  gap:15px;
  margin-top:20px;
}

.contact-box a{
  padding:10px 18px;
  background:#25D366;
  color:#fff;
  border-radius:8px;
  text-decoration:none;
}

/* FIX MOBILE VISI MISI */
@media(max-width:768px){

  .vm-row{
    flex-direction:column;
    text-align:center;
  }

  .vm-row.reverse{
    flex-direction:column;
  }

  .vm-text{
    margin-top:20px;
  }
}
