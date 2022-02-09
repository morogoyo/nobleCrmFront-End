
import {UserInfo} from "./userInfo";
import {ClientAssets} from "./clientAssets";
import {PropertyDetails} from "./propertyDetails";

export interface Client {

  fname: string
  lname: string
  username: string
  password: string
  passwordConfirm: string
  email: string
  role: string
  userInfo: Record<string, UserInfo>
  clientAssets: Record<string, ClientAssets>
  propertyDetails: Record<string, PropertyDetails>
}
