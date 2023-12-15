// test
import { formatDistanceToNow } from "date-fns";

const date = "1997-09-27 10:00:00";
const para = document.createElement("p");
para.textContent = `${formatDistanceToNow(new Date(date))} ago`;
document.body.appendChild(para);
