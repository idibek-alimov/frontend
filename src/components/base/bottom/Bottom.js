import React from 'react'
import './Bottom.css'
import { useTranslation } from "react-i18next";
import '../../../locals/i18n';
const Bottom = () => {
    const { t } = useTranslation();  

    return <div>
        <div className='bottomBox'>
            {t("founder")}
        </div>
    </div>
}
export default Bottom