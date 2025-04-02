ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1384676.426567, 7484944.279469, 1391388.657549, 7488388.424219]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_frededeomrder_1 = new ol.format.GeoJSON();
var features_frededeomrder_1 = format_frededeomrder_1.readFeatures(json_frededeomrder_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrder_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_1.addFeatures(features_frededeomrder_1);
var lyr_frededeomrder_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_1, 
                style: style_frededeomrder_1,
                popuplayertitle: 'frededeområder',
                interactive: false,
    title: 'frededeområder<br />\
    <img src="styles/legend/frededeomrder_1_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrder_1_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrder_1_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrder_1_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrder_1_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/frededeomrder_1_5.png" /> <br />' });
var format_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2 = new ol.format.GeoJSON();
var features_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2 = format_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2.readFeatures(json_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2.addFeatures(features_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2);
var lyr_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2, 
                style: style_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2,
                popuplayertitle: 'lokal plan forslag til tema kort — TEMA KORT forlag LOKAL PLANER 0167 HVIDOVRE KOMMUNE',
                interactive: true,
    title: 'lokal plan forslag til tema kort — TEMA KORT forlag LOKAL PLANER 0167 HVIDOVRE KOMMUNE<br />\
    <img src="styles/legend/lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2_0.png" /> 11367622<br />\
    <img src="styles/legend/lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2_1.png" /> 11442254<br />\
    <img src="styles/legend/lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2_2.png" /> 11461117<br />\
    <img src="styles/legend/lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2_3.png" /> 11484598<br />\
    <img src="styles/legend/lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2_4.png" /> <br />' });
var format_strandbeskyttelse_3 = new ol.format.GeoJSON();
var features_strandbeskyttelse_3 = format_strandbeskyttelse_3.readFeatures(json_strandbeskyttelse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strandbeskyttelse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strandbeskyttelse_3.addFeatures(features_strandbeskyttelse_3);
var lyr_strandbeskyttelse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strandbeskyttelse_3, 
                style: style_strandbeskyttelse_3,
                popuplayertitle: 'strandbeskyttelse',
                interactive: false,
                title: '<img src="styles/legend/strandbeskyttelse_3.png" /> strandbeskyttelse'
            });
var format_fredeomhvidov_4 = new ol.format.GeoJSON();
var features_fredeomhvidov_4 = format_fredeomhvidov_4.readFeatures(json_fredeomhvidov_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fredeomhvidov_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fredeomhvidov_4.addFeatures(features_fredeomhvidov_4);
var lyr_fredeomhvidov_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fredeomhvidov_4, 
                style: style_fredeomhvidov_4,
                popuplayertitle: 'fredeomhvidov',
                interactive: true,
                title: '<img src="styles/legend/fredeomhvidov_4.png" /> fredeomhvidov'
            });
var format_kommuneplan_5 = new ol.format.GeoJSON();
var features_kommuneplan_5 = format_kommuneplan_5.readFeatures(json_kommuneplan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_5.addFeatures(features_kommuneplan_5);
var lyr_kommuneplan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_5, 
                style: style_kommuneplan_5,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_5.png" /> kommuneplan'
            });
var format_havne_6 = new ol.format.GeoJSON();
var features_havne_6 = format_havne_6.readFeatures(json_havne_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_havne_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_havne_6.addFeatures(features_havne_6);
var lyr_havne_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_havne_6, 
                style: style_havne_6,
                popuplayertitle: 'havne',
                interactive: true,
                title: '<img src="styles/legend/havne_6.png" /> havne'
            });
var format_hvidfolk60_7 = new ol.format.GeoJSON();
var features_hvidfolk60_7 = format_hvidfolk60_7.readFeatures(json_hvidfolk60_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hvidfolk60_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hvidfolk60_7.addFeatures(features_hvidfolk60_7);
var lyr_hvidfolk60_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hvidfolk60_7, 
                style: style_hvidfolk60_7,
                popuplayertitle: 'hvidfolk60',
                interactive: true,
                title: '<img src="styles/legend/hvidfolk60_7.png" /> hvidfolk60'
            });
var format_QGISTankstationer_8 = new ol.format.GeoJSON();
var features_QGISTankstationer_8 = format_QGISTankstationer_8.readFeatures(json_QGISTankstationer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QGISTankstationer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QGISTankstationer_8.addFeatures(features_QGISTankstationer_8);
var lyr_QGISTankstationer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QGISTankstationer_8, 
                style: style_QGISTankstationer_8,
                popuplayertitle: 'QGIS — Tankstationer',
                interactive: true,
                title: '<img src="styles/legend/QGISTankstationer_8.png" /> QGIS — Tankstationer'
            });
var format_QGISSupermarkeder_9 = new ol.format.GeoJSON();
var features_QGISSupermarkeder_9 = format_QGISSupermarkeder_9.readFeatures(json_QGISSupermarkeder_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QGISSupermarkeder_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QGISSupermarkeder_9.addFeatures(features_QGISSupermarkeder_9);
var lyr_QGISSupermarkeder_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QGISSupermarkeder_9, 
                style: style_QGISSupermarkeder_9,
                popuplayertitle: 'QGIS — Supermarkeder',
                interactive: true,
                title: '<img src="styles/legend/QGISSupermarkeder_9.png" /> QGIS — Supermarkeder'
            });
var format_QGISSundhed_10 = new ol.format.GeoJSON();
var features_QGISSundhed_10 = format_QGISSundhed_10.readFeatures(json_QGISSundhed_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QGISSundhed_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QGISSundhed_10.addFeatures(features_QGISSundhed_10);
var lyr_QGISSundhed_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QGISSundhed_10, 
                style: style_QGISSundhed_10,
                popuplayertitle: 'QGIS — Sundhed',
                interactive: true,
                title: '<img src="styles/legend/QGISSundhed_10.png" /> QGIS — Sundhed'
            });
var format_QGISBrnehaver_11 = new ol.format.GeoJSON();
var features_QGISBrnehaver_11 = format_QGISBrnehaver_11.readFeatures(json_QGISBrnehaver_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QGISBrnehaver_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QGISBrnehaver_11.addFeatures(features_QGISBrnehaver_11);
var lyr_QGISBrnehaver_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QGISBrnehaver_11, 
                style: style_QGISBrnehaver_11,
                popuplayertitle: 'QGIS — Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/QGISBrnehaver_11.png" /> QGIS — Børnehaver'
            });
var format_QGISApoteker_12 = new ol.format.GeoJSON();
var features_QGISApoteker_12 = format_QGISApoteker_12.readFeatures(json_QGISApoteker_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QGISApoteker_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QGISApoteker_12.addFeatures(features_QGISApoteker_12);
var lyr_QGISApoteker_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QGISApoteker_12, 
                style: style_QGISApoteker_12,
                popuplayertitle: 'QGIS — Apoteker',
                interactive: true,
                title: '<img src="styles/legend/QGISApoteker_12.png" /> QGIS — Apoteker'
            });
var format_Togstationer_13 = new ol.format.GeoJSON();
var features_Togstationer_13 = format_Togstationer_13.readFeatures(json_Togstationer_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_13.addFeatures(features_Togstationer_13);
var lyr_Togstationer_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_13, 
                style: style_Togstationer_13,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_13.png" /> Togstationer'
            });
var format_Bager_14 = new ol.format.GeoJSON();
var features_Bager_14 = format_Bager_14.readFeatures(json_Bager_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bager_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bager_14.addFeatures(features_Bager_14);
var lyr_Bager_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bager_14, 
                style: style_Bager_14,
                popuplayertitle: 'Bager',
                interactive: true,
                title: '<img src="styles/legend/Bager_14.png" /> Bager'
            });
var format_Svmmehal_15 = new ol.format.GeoJSON();
var features_Svmmehal_15 = format_Svmmehal_15.readFeatures(json_Svmmehal_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Svmmehal_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Svmmehal_15.addFeatures(features_Svmmehal_15);
var lyr_Svmmehal_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Svmmehal_15, 
                style: style_Svmmehal_15,
                popuplayertitle: 'Svømmehal',
                interactive: true,
                title: '<img src="styles/legend/Svmmehal_15.png" /> Svømmehal'
            });
var format_Legeplads_16 = new ol.format.GeoJSON();
var features_Legeplads_16 = format_Legeplads_16.readFeatures(json_Legeplads_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legeplads_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legeplads_16.addFeatures(features_Legeplads_16);
var lyr_Legeplads_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legeplads_16, 
                style: style_Legeplads_16,
                popuplayertitle: 'Legeplads',
                interactive: true,
                title: '<img src="styles/legend/Legeplads_16.png" /> Legeplads'
            });
var format_Ungdomsuddannelser_17 = new ol.format.GeoJSON();
var features_Ungdomsuddannelser_17 = format_Ungdomsuddannelser_17.readFeatures(json_Ungdomsuddannelser_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ungdomsuddannelser_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ungdomsuddannelser_17.addFeatures(features_Ungdomsuddannelser_17);
var lyr_Ungdomsuddannelser_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ungdomsuddannelser_17, 
                style: style_Ungdomsuddannelser_17,
                popuplayertitle: 'Ungdomsuddannelser',
                interactive: true,
                title: '<img src="styles/legend/Ungdomsuddannelser_17.png" /> Ungdomsuddannelser'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_frededeomrder_1.setVisible(true);lyr_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2.setVisible(true);lyr_strandbeskyttelse_3.setVisible(true);lyr_fredeomhvidov_4.setVisible(true);lyr_kommuneplan_5.setVisible(true);lyr_havne_6.setVisible(true);lyr_hvidfolk60_7.setVisible(true);lyr_QGISTankstationer_8.setVisible(true);lyr_QGISSupermarkeder_9.setVisible(true);lyr_QGISSundhed_10.setVisible(true);lyr_QGISBrnehaver_11.setVisible(true);lyr_QGISApoteker_12.setVisible(true);lyr_Togstationer_13.setVisible(true);lyr_Bager_14.setVisible(true);lyr_Svmmehal_15.setVisible(true);lyr_Legeplads_16.setVisible(true);lyr_Ungdomsuddannelser_17.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_frededeomrder_1,lyr_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2,lyr_strandbeskyttelse_3,lyr_fredeomhvidov_4,lyr_kommuneplan_5,lyr_havne_6,lyr_hvidfolk60_7,lyr_QGISTankstationer_8,lyr_QGISSupermarkeder_9,lyr_QGISSundhed_10,lyr_QGISBrnehaver_11,lyr_QGISApoteker_12,lyr_Togstationer_13,lyr_Bager_14,lyr_Svmmehal_15,lyr_Legeplads_16,lyr_Ungdomsuddannelser_17];
lyr_frededeomrder_1.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_strandbeskyttelse_3.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_fredeomhvidov_4.set('fieldAliases', {'fid': 'fid', 'lokalitet_': 'lokalitet_', 'systemnr': 'systemnr', 'stednr': 'stednr', 'loknr': 'loknr', 'sbext': 'sbext', 'frednr': 'frednr', 'anlaegstyp': 'anlaegstyp', 'datering': 'datering', 'zone': 'zone', 'url': 'url', });
lyr_kommuneplan_5.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_havne_6.set('fieldAliases', {'havne_id': 'havne_id', 'navn': 'navn', 'erhvervsha': 'erhvervsha', 'lystbaadeh': 'lystbaadeh', 'bredde': 'bredde', 'laengde': 'laengde', 'x': 'x', 'y': 'y', 'type': 'type', 'typetekst': 'typetekst', 'mst_id': 'mst_id', 'distr_id': 'distr_id', 'ho_id': 'ho_id', 'link': 'link', });
lyr_hvidfolk60_7.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_QGISTankstationer_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QGISSupermarkeder_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QGISSundhed_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'navn': 'navn', });
lyr_QGISBrnehaver_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QGISApoteker_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bager_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Svmmehal_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Legeplads_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ungdomsuddannelser_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_frededeomrder_1.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2.set('fieldImages', {'fid': '', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_strandbeskyttelse_3.set('fieldImages', {'fid': '', 'forretningshaendelse': '', 'senesteSagLokalId': '', 'forretningsproces': '', 'id.namespace': '', 'id.lokalId': '', 'paataenktHandling': '', 'registreringFra': '', 'virkningFra': '', 'virkningsaktoer': '', 'temaFladeID': '', 'tematype': '', 'jordstykkeLokalId': '', });
lyr_fredeomhvidov_4.set('fieldImages', {'fid': 'TextEdit', 'lokalitet_': 'TextEdit', 'systemnr': 'TextEdit', 'stednr': 'TextEdit', 'loknr': 'TextEdit', 'sbext': 'TextEdit', 'frednr': 'TextEdit', 'anlaegstyp': 'TextEdit', 'datering': 'TextEdit', 'zone': 'TextEdit', 'url': 'TextEdit', });
lyr_kommuneplan_5.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_havne_6.set('fieldImages', {'havne_id': 'TextEdit', 'navn': 'TextEdit', 'erhvervsha': 'TextEdit', 'lystbaadeh': 'TextEdit', 'bredde': 'TextEdit', 'laengde': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'type': 'TextEdit', 'typetekst': 'TextEdit', 'mst_id': 'TextEdit', 'distr_id': 'TextEdit', 'ho_id': 'TextEdit', 'link': 'TextEdit', });
lyr_hvidfolk60_7.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_QGISTankstationer_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_QGISSupermarkeder_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_QGISSundhed_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'navn': 'TextEdit', });
lyr_QGISBrnehaver_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_QGISApoteker_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Togstationer_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Bager_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Svmmehal_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Legeplads_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Ungdomsuddannelser_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_frededeomrder_1.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_lokalplanforslagtiltemakortTEMAKORTforlagLOKALPLANER0167HVIDOVREKOMMUNE_2.set('fieldLabels', {'fid': 'no label', 'planid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_strandbeskyttelse_3.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_fredeomhvidov_4.set('fieldLabels', {'fid': 'no label', 'lokalitet_': 'no label', 'systemnr': 'no label', 'stednr': 'no label', 'loknr': 'no label', 'sbext': 'no label', 'frednr': 'no label', 'anlaegstyp': 'no label', 'datering': 'no label', 'zone': 'no label', 'url': 'no label', });
lyr_kommuneplan_5.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_havne_6.set('fieldLabels', {'havne_id': 'no label', 'navn': 'no label', 'erhvervsha': 'no label', 'lystbaadeh': 'no label', 'bredde': 'no label', 'laengde': 'no label', 'x': 'no label', 'y': 'no label', 'type': 'no label', 'typetekst': 'no label', 'mst_id': 'no label', 'distr_id': 'no label', 'ho_id': 'no label', 'link': 'no label', });
lyr_hvidfolk60_7.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_QGISTankstationer_8.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_QGISSupermarkeder_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_QGISSundhed_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'navn': 'no label', });
lyr_QGISBrnehaver_11.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_QGISApoteker_12.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Togstationer_13.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Bager_14.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Svmmehal_15.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Legeplads_16.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Ungdomsuddannelser_17.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Ungdomsuddannelser_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});