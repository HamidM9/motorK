
import React from "react";
import { Link } from "react-router-dom";
import Entry from "../Entry.js";
import data from "../data.js";
import SearchBar from "../searchBar.js";
function Home() {
return (
    <div>
    
<SearchBar data={data} />

<Entry make = {data[0].make} model = {data[0].model} price = {data[0].price} />
<Entry make = {data[1].make} model = {data[1].model} price = {data[1].price} />
<Entry make = {data[2].make} model = {data[2].model} price = {data[2].price} />
<Entry make = {data[3].make} model = {data[3].model} price = {data[3].price} />
<Entry make = {data[4].make} model = {data[4].model} price = {data[4].price} />
<Entry make = {data[5].make} model = {data[5].model} price = {data[5].price} />
<Entry make = {data[6].make} model = {data[6].model} price = {data[6].price} />
<Entry make = {data[7].make} model = {data[7].model} price = {data[7].price} />
<Entry make = {data[8].make} model = {data[8].model} price = {data[8].price} />
<Entry make = {data[9].make} model = {data[9].model} price = {data[9].price} />
<Entry make = {data[10].make} model = {data[10].model} price = {data[10].price} />
<Entry make = {data[11].make} model = {data[11].model} price = {data[11].price} />
<Entry make = {data[12].make} model = {data[12].model} price = {data[12].price} />
<Entry make = {data[13].make} model = {data[13].model} price = {data[13].price} />
<Entry make = {data[14].make} model = {data[14].model} price = {data[14].price} />
<Entry make = {data[15].make} model = {data[15].model} price = {data[15].price} />
<Entry make = {data[16].make} model = {data[16].model} price = {data[16].price} />
<Entry make = {data[17].make} model = {data[17].model} price = {data[17].price} />
<Entry make = {data[18].make} model = {data[18].model} price = {data[18].price} />
<Entry make = {data[19].make} model = {data[19].model} price = {data[19].price} />
    </div>
);
}

export default Home;
