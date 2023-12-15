// test
import { formatDistanceToNow } from "date-fns";

const date = "1997-09-27 10:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;
