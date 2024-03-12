const ACTIVE_AUDIENCE = [

{value:"1-5k", text:"1-5k"},
{value:"5-10k", text:"5-10k"},
{value:"10-50k", text:"10-50k"},
{value:"50-100k", text:"50-100k"},
{value:"500-999k", text:"500-999k"},
]

const PLATFORMS = [
    {value:"Instagram", text:"Instagram"},
    {value:"TikTok", text:"TikTok"},
    {value:"Twitter/X", text:"Twitter/X"},
    {value:"LinkedIn", text:"LinkedIn"},
    {value:"YouTube", text:"YouTube"},
    {value:"Reddit", text:"Reddit"},
    {value:"GitHub", text:"GitHub"},
    {value:"Telegram", text:"Telegram"},
    {value:"Twitch", text:"Twitch"},
]

const FORM_DEFAULT = {
    firstName:"", lastName:"", phone:"", email:"", audience:"", reason:"",
    sector:"", dob:"",
  }

export {ACTIVE_AUDIENCE, PLATFORMS, FORM_DEFAULT}