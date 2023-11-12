import React from 'react'

import { Form, Input,  notification } from "antd";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { manageService } from '../../../services/manage';
import { validateTypeJob } from '../../../ValidateYup/ValidateYup';
export default function AdminUpdateJobType({setShowModal2, idJobType}) {
  return (
    <div>AdminUpdateJobType +{idJobType}</div>
  )
}
