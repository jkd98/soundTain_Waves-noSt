import { Injectable } from '@angular/core';

import { clienteAxios } from '../../helpers/axiosClient';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  autenticarUsusrio = async (email:string,pass:string) => {
    try {
      const url = `/auth/login`; // api

      const { data } = await clienteAxios.post(url,{email,pass});
      
      localStorage.setItem('token',data.token);
      //console.log(data);
      return null;
    } catch (error) {
      // envira msgs de error
      let err:any = error;
      return err.response.data.msg;
    }
  }
}
