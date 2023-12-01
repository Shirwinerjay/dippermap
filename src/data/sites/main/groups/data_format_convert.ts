import { IGroup } from '../../../types'
export const DataFormatConvert: IGroup = {
    icon: '',
    name: '数据转换',
    order: 2,
    en_name: 'Data format conversion',
    children: [
        // https://gdal3.js.org/
        {
            icon: "",
            name: "gdal3.js",
            en_name: "gdal3.js",
            description: "栅格矢量格式转换",
            en_description: " Convert raster and vector geospatial data to various formats and coordinate systems entirely in the browser",
            site_url: "https://gdal3.js.org/",
            order: 2,
            tags: ["GIS", "Web", "Data"],
        },
        {
            "icon": "https://mygeodata.cloud/favicon.ico",
            "name": "MyGeodata Cloud Converter",
            "en_name": "MyGeodata Cloud Converter",
            "description": "在线地理数据格式转换工具",
            "en_description": "Online geospatial data format conversion tool",
            "site_url": "https://mygeodata.cloud/converter/",
            "order": 5,
            "tags": ["Geospatial Data", "Converter", "GIS"]
          }
          
    ]
}
