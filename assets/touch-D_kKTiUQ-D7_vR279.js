import{F as r,R as a}from"./index-B0IGRdYh.js";import{o as c}from"./command-nBL1aO7T-CliNWZCP.js";const l=new c().setRequireArgs(!0).setManual({purpose:"Change file timestamps",usage:"touch [options] files",description:`Update the access and modification times of each FILE to the current time.

A file argument that does not exist is created empty.`}).setExecute(function(e,s){const{currentDirectory:t}=s,o=e[0];if(o==="girls\\"&&e[1]==="boo**")return r(this.name,"Cannot touch 'girls boo**': Permission denied");const{name:i,extension:n}=a.splitId(o);return t.findFile(i,n)?{blank:!0}:(t.createFile(i,n),{blank:!0})});export{l as touch};
