var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_batas_administrasi_1 = new ol.format.GeoJSON();
var features_batas_administrasi_1 = format_batas_administrasi_1.readFeatures(json_batas_administrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_administrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_administrasi_1.addFeatures(features_batas_administrasi_1);
var lyr_batas_administrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_administrasi_1, 
                style: style_batas_administrasi_1,
                popuplayertitle: 'batas_administrasi',
                interactive: true,
                title: '<img src="styles/legend/batas_administrasi_1.png" /> batas_administrasi'
            });
var format_Jaringan_Transportasi_2 = new ol.format.GeoJSON();
var features_Jaringan_Transportasi_2 = format_Jaringan_Transportasi_2.readFeatures(json_Jaringan_Transportasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Transportasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Transportasi_2.addFeatures(features_Jaringan_Transportasi_2);
var lyr_Jaringan_Transportasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Transportasi_2, 
                style: style_Jaringan_Transportasi_2,
                popuplayertitle: 'Jaringan_Transportasi',
                interactive: true,
                title: '<img src="styles/legend/Jaringan_Transportasi_2.png" /> Jaringan_Transportasi'
            });
var format_radius800_3 = new ol.format.GeoJSON();
var features_radius800_3 = format_radius800_3.readFeatures(json_radius800_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_radius800_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_radius800_3.addFeatures(features_radius800_3);
var lyr_radius800_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_radius800_3, 
                style: style_radius800_3,
                popuplayertitle: 'radius 800',
                interactive: true,
                title: '<img src="styles/legend/radius800_3.png" /> radius 800'
            });
var format_AREAPERUMAHAN_4 = new ol.format.GeoJSON();
var features_AREAPERUMAHAN_4 = format_AREAPERUMAHAN_4.readFeatures(json_AREAPERUMAHAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAPERUMAHAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAPERUMAHAN_4.addFeatures(features_AREAPERUMAHAN_4);
var lyr_AREAPERUMAHAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAPERUMAHAN_4, 
                style: style_AREAPERUMAHAN_4,
                popuplayertitle: 'AREA PERUMAHAN',
                interactive: true,
                title: '<img src="styles/legend/AREAPERUMAHAN_4.png" /> AREA PERUMAHAN'
            });
var format_Servicearea800_5 = new ol.format.GeoJSON();
var features_Servicearea800_5 = format_Servicearea800_5.readFeatures(json_Servicearea800_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea800_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea800_5.addFeatures(features_Servicearea800_5);
var lyr_Servicearea800_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearea800_5, 
                style: style_Servicearea800_5,
                popuplayertitle: 'Service area 800',
                interactive: true,
                title: '<img src="styles/legend/Servicearea800_5.png" /> Service area 800'
            });
var format_radius400_6 = new ol.format.GeoJSON();
var features_radius400_6 = format_radius400_6.readFeatures(json_radius400_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_radius400_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_radius400_6.addFeatures(features_radius400_6);
var lyr_radius400_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_radius400_6, 
                style: style_radius400_6,
                popuplayertitle: 'radius 400',
                interactive: true,
                title: '<img src="styles/legend/radius400_6.png" /> radius 400'
            });
var format_Servicearea400_7 = new ol.format.GeoJSON();
var features_Servicearea400_7 = format_Servicearea400_7.readFeatures(json_Servicearea400_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea400_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea400_7.addFeatures(features_Servicearea400_7);
var lyr_Servicearea400_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearea400_7, 
                style: style_Servicearea400_7,
                popuplayertitle: 'Service area 400',
                interactive: true,
                title: '<img src="styles/legend/Servicearea400_7.png" /> Service area 400'
            });
var format_AREAKOMERSIAL_8 = new ol.format.GeoJSON();
var features_AREAKOMERSIAL_8 = format_AREAKOMERSIAL_8.readFeatures(json_AREAKOMERSIAL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAKOMERSIAL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAKOMERSIAL_8.addFeatures(features_AREAKOMERSIAL_8);
var lyr_AREAKOMERSIAL_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAKOMERSIAL_8, 
                style: style_AREAKOMERSIAL_8,
                popuplayertitle: 'AREA KOMERSIAL',
                interactive: true,
                title: '<img src="styles/legend/AREAKOMERSIAL_8.png" /> AREA KOMERSIAL'
            });
var format_AREAPUBLIK_9 = new ol.format.GeoJSON();
var features_AREAPUBLIK_9 = format_AREAPUBLIK_9.readFeatures(json_AREAPUBLIK_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAPUBLIK_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAPUBLIK_9.addFeatures(features_AREAPUBLIK_9);
var lyr_AREAPUBLIK_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAPUBLIK_9, 
                style: style_AREAPUBLIK_9,
                popuplayertitle: 'AREA PUBLIK',
                interactive: true,
                title: '<img src="styles/legend/AREAPUBLIK_9.png" /> AREA PUBLIK'
            });
var format_Halte_10 = new ol.format.GeoJSON();
var features_Halte_10 = format_Halte_10.readFeatures(json_Halte_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_10.addFeatures(features_Halte_10);
var lyr_Halte_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_10, 
                style: style_Halte_10,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_10.png" /> Halte'
            });

lyr_Positron_0.setVisible(true);lyr_batas_administrasi_1.setVisible(true);lyr_Jaringan_Transportasi_2.setVisible(true);lyr_radius800_3.setVisible(true);lyr_AREAPERUMAHAN_4.setVisible(true);lyr_Servicearea800_5.setVisible(true);lyr_radius400_6.setVisible(true);lyr_Servicearea400_7.setVisible(true);lyr_AREAKOMERSIAL_8.setVisible(true);lyr_AREAPUBLIK_9.setVisible(true);lyr_Halte_10.setVisible(true);
var layersList = [lyr_Positron_0,lyr_batas_administrasi_1,lyr_Jaringan_Transportasi_2,lyr_radius800_3,lyr_AREAPERUMAHAN_4,lyr_Servicearea800_5,lyr_radius400_6,lyr_Servicearea400_7,lyr_AREAKOMERSIAL_8,lyr_AREAPUBLIK_9,lyr_Halte_10];
lyr_batas_administrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jaringan_Transportasi_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_radius800_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Luas': 'Luas', });
lyr_AREAPERUMAHAN_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Luas': 'Luas', 'Luas Layan': 'Luas Layan', 'Presentase': 'Presentase', });
lyr_Servicearea800_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', });
lyr_radius400_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Luas': 'Luas', });
lyr_Servicearea400_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', });
lyr_AREAKOMERSIAL_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Luas': 'Luas', 'Luas Layan': 'Luas Layan', 'Presentase': 'Presentase', });
lyr_AREAPUBLIK_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Luas': 'Luas', 'Luas Layan': 'Luas Layan', 'Presentase': 'Presentase', });
lyr_Halte_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'foto': 'foto', });
lyr_batas_administrasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jaringan_Transportasi_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_radius800_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas': 'TextEdit', });
lyr_AREAPERUMAHAN_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas': 'TextEdit', 'Luas Layan': 'TextEdit', 'Presentase': '', });
lyr_Servicearea800_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_radius400_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Servicearea400_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_AREAKOMERSIAL_8.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', 'Luas': '', 'Luas Layan': '', 'Presentase': '', });
lyr_AREAPUBLIK_9.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', 'Luas': '', 'Luas Layan': '', 'Presentase': '', });
lyr_Halte_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'foto': 'ExternalResource', });
lyr_batas_administrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'inline label - always visible', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jaringan_Transportasi_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_radius800_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Luas': 'no label', });
lyr_AREAPERUMAHAN_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Luas': 'inline label - always visible', 'Luas Layan': 'inline label - always visible', 'Presentase': 'inline label - always visible', });
lyr_Servicearea800_5.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_radius400_6.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Luas': 'no label', });
lyr_Servicearea400_7.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_AREAKOMERSIAL_8.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Luas': 'inline label - always visible', 'Luas Layan': 'inline label - always visible', 'Presentase': 'inline label - always visible', });
lyr_AREAPUBLIK_9.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Luas': 'inline label - always visible', 'Luas Layan': 'inline label - always visible', 'Presentase': 'inline label - always visible', });
lyr_Halte_10.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'foto': 'no label', });
lyr_Halte_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});