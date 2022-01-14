/** @param {NS} ns **/
export async function main(ns) {
	const hosts = ns.getPurchasedServers();
for (var i=0; i<=hosts.length; i++) 					{	 
	let host = hosts[i];
ns.killall(host)
}
}
