import{V as a,f as u}from"./index-tJv-8Jve.js";import{C as f}from"./command-DZiH-9YI.js";const c=new f().setRequireArgs(!0).setManual({purpose:"Remove a file"}).setExecute(function(r,n){const{currentDirectory:o}=n,e=r[0],{name:i,extension:s}=a.splitId(e),t=o.findFile(i,s);return t?(t.delete(),{blank:!0}):u(this.name,`${e}: No such file`)});export{c as rm};
