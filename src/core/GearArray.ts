import ObjectUtil from "../utils/ObjectUtil";

class GearArray<T> {

    //字符串转换成array
    public static fromString(val: string,split: string) {
        if(val != null) {
            let array = new GearArray<string>();
            array.arr = val.split(split);
            return array;
        }
        return null;
    }
    private arr: T[] = [];
    constructor(arr?: T[]) {
        if(arr != null) {
            if(arr instanceof Array) {
                this.arr = arr;
            }else {
                this.arr = [arr];
            }
        }else {
            this.arr = [];
        }
    }

    public indexOf(ele: T) {
        for(var i = 0; i < this.arr.length; i++) {
            if(this.arr[i] === ele) {
                return i;
            }
        }
        return -1;
    }

    public addAll(arr: T[]) {
        this.arr = this.arr.concat(arr);
    }

    public toArray() {
        return this.arr;
    }
    public get(index: number) {
        return this.arr[index];
    }

    public add(obj: T) {
        this.arr.push(obj);
    }

    public insert(obj: T,index: number) {
        this.arr.splice(index,0,obj);
    }

    public length(): number {
        return this.arr.length;
    }

    public toString(split?: string): string {
        split = split||",";
        let str = "";
        for(var i = 0; i < this.arr.length; i++) {
            if(i > 0) {
                str += split;
            }
            str += this.arr[i];
        }
        return str;
    }

    public clone(deep?: boolean): GearArray<T> {
        var arr = new Array();
        for(var i = 0; i < this.arr.length;i++) {
            let item = this.arr[i];
             if((typeof item) == "object" && deep == true) {
            arr.push(ObjectUtil.extend(typeof deep != "boolean" ? false : deep,{},this.arr[i]));
          }else {
            arr.push(this.arr[i]);
          }
        }
        return new GearArray<T>(arr);
    }

    public contains(ele: T): boolean {
        for(var i = 0; i < this.arr.length; i++) {
            if(this.arr[i] === ele) {
                return true;
            }
        }
        return false;
    }

    public remove(ele: T) {
        let eleRe = null;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === ele) {
                eleRe = this.arr.splice(i, 1);
                i--;
            }
        }
        return eleRe;
    }

    public removeByIndex(ele?: number) {
        for (var i = 0; i < this.arr.length; i++) {
            if (ele === i) {
                return this.arr.splice(i, 1);
            }
        }
        return null;
    }    

    public up(ele: T|number) {
        let index: number|undefined = -1;
        if(typeof ele != "number") {
            index = this.indexOf(ele);
        }
        let eleInner = this.removeByIndex(index);
        if(index != null && index > 0 && eleInner != null) {
            this.insert(eleInner[0],index - 1);
        }   
    }

    public down(ele: T|number) {
        let index: number|undefined = -1;
        if(typeof ele != "number") {
            index = this.indexOf(ele);
        }
        let eleInner = this.removeByIndex(index);
        if(index != null && index < this.arr.length && eleInner != null) {
            this.insert(eleInner[0],index + 1);
        }  
    }
}
window.GearArray = GearArray as any;
