import{f as p,S as g}from"./index-CcOgn_VS.js";import{C as w}from"./command-b8KknBM2.js";const I=1.25,i=[["                        (@@) (  ) (@)  ( )  @@   ()   @   o   @   o","                   (   )","               (@@@@)","            (    )","","          (@@@)"],["                        (  ) (@@) ( )  (@)  ()    @@    o    @    o   @","                   (@@@)","               (    )","            (@@@@)","","          (   )"]],u=["      ====        ________                ___________","  _D _|  |_______/        \\__I_I_____===__|_________|","   |(_)---  |   H\\________/ |   |        =|___ ___|  ","   /     |  |   H  |  |     |   |         ||_| |_||  ","  |      |  |   H  |__--------------------| [___] |  ","  | ________|___H__/__|_____/[][]~\\_______|       |  ","  |/ |   |-----------I_____I [][] []  D   |=======|__"],m=[["__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__"," |/-=|___|=    ||    ||    ||    |_____/~\\___/       ","  \\_/      \\O=====O=====O=====O_/      \\_/           "],["__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__"," |/-=|___|=O=====O=====O=====O   |_____/~\\___/       ","  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/           "],["__/ =| o |=-O=====O=====O=====O \\ ____Y___________|__"," |/-=|___|=    ||    ||    ||    |_____/~\\___/       ","  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/           "],["__/ =| o |=-~O=====O=====O=====O\\ ____Y___________|__"," |/-=|___|=    ||    ||    ||    |_____/~\\___/       ","  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/           "],["__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__"," |/-=|___|=   O=====O=====O=====O|_____/~\\___/       ","  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/           "],["__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__"," |/-=|___|=    ||    ||    ||    |_____/~\\___/       ","  \\_/      \\_O=====O=====O=====O/      \\_/           "]].reverse(),f=["                             ","    _________________        ","   _|                \\_____A "," =|                        | "," -|                        | ","__|________________________|_","|__________________________|_","   |_D__D__D_|  |_D__D__D_|  ","    \\_/   \\_/    \\_/   \\_/   "],h=[[" _______================_______ ","  |  | ___  ___  ___  ___ |  |  ","  |  | | |  | |  | |  | | |  |  ","  |  | |_|  |_|  |_|  |_| |  |  ","  |  |                    |  |  ","__|__|____________________|__|__","_|____________________________|_","   |_D__D__D_|     |_D__D__D_|  ","    \\_/   \\_/       \\_/   \\_/   "],["                             ","  ________========__HH____   "," /                  HH    \\  ","/                   HH     \\ ","\\                   HH     / ","_\\__________________HH____/__","|__________________________|_","   |_D__D__D_|  |_D__D__D_|  ","    \\_/   \\_/    \\_/   \\_/   "],["                             ","                             ","                             ","                             ","                             ","_____________________________","|__________________________|_","   |_D__D__D_|  |_D__D__D_|  ","    \\_/   \\_/    \\_/   \\_/   "],["                             ","    _|__|___________|__|___  ","   (_|__|___________|__|___) ","   _(|__|___________|__|__)_ ","  (__|__|___________|__|____)","_(___|__|___________|__|__)__","|__________________________|_","   |_D__D__D_|  |_D__D__D_|  ","    \\_/   \\_/    \\_/   \\_/   "],["                             "," ___________________________ "," \\      |           |      / ","  \\     |           |     /  ","  |\\    |           |    /|  ","__|_\\___|___________|___/_|__","|__________________________|_","   |_D__D__D_|  |_D__D__D_|  ","    \\_/   \\_/    \\_/   \\_/   "]];function E(s,r=1){const o=i[0].length,e=u.length+m[0].length,_=f.length,n=o+e-_,c=i[Math.round(s/4)%i.length],a=u,H=m[s%m.length],O=50-s;return`
${c.concat(a,H).map((t,l)=>{if(l>=n&&r>0)for(let D=0;D<r;D++)D===0?t+=f[l-n]:t+=h[(D-1)%h.length][l-n];return O===0?t:O>0?" ".repeat(O)+t:(t=t.slice(-O),t)}).join(`
`)}
`}const M=new w().setManual({purpose:"Show animations aimed to correct users who accidentally enter sl instead of ls. SL stands for Steam Locomotive.",usage:`sl
sl -w number`,options:{"-w number":"Set the amount of wagons (defaults to 1)"}}).addOption({short:"w",long:"wagons",isInput:!0}).setExecute(function(s,r){const{inputs:o}=r;let e=1;if(o!=null&&o.w&&(e=parseInt(o.w),!e||e<0))return p(this.name,"Please specify a valid amount of wagons");const _=new g;let n=0;const c=setInterval(()=>{const a=E(n,e);_.send(a),n++,a.trim().length===0&&_.stop()},100/I);return _.on(g.EVENT_NAMES.stop,()=>{clearInterval(c)}),_.start(),_});export{M as sl};