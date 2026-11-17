import test from 'node:test';
import assert from 'node:assert/strict';
import {totals,validateCart} from './billing.js';
test('discount before tax and paise rounding',()=>{assert.deepEqual(totals([{price:99.99,quantity:3}],10,18),{subtotal:299.97,discount:10,tax:18,taxAmount:52.19,total:342.16});});
test('reject invalid discounts and taxes',()=>{assert.throws(()=>totals([],1));assert.throws(()=>totals([],0,-1));assert.throws(()=>totals([],0,NaN));});
test('stock validation and invoice snapshots',()=>{const inventory=[{id:'a',name:'Pen',sku:'P1',price:10,stock:2}];const lines=validateCart([{id:'a',quantity:2}],inventory);inventory[0].price=20;assert.equal(lines[0].price,10);for(const q of [0,-1,1.5,3])assert.throws(()=>validateCart([{id:'a',quantity:q}],inventory));assert.throws(()=>validateCart([],inventory));assert.throws(()=>validateCart([{id:'b',quantity:1}],inventory));});
