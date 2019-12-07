export class Livre{
private _titre:string;
private _acteur:string;
private _prix:number;
private _reduction:number;
constructor(t:string,a:string,p:number,r:number){
    this._titre=t;
    this._acteur=a;
    this._prix=p;
    this._reduction=r;
}

public get titre():string{
    return this._titre;
} 

public get acteur():string{
    return this._acteur;
} 

public get prix():number{
    return this._prix;
} 

public get reduction():number{
    return this._reduction;
} 
public set reduction(x:number){
    this._reduction=x;
}




}