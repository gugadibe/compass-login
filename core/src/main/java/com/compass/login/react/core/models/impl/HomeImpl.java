package com.compass.login.react.core.models.impl;


import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.compass.login.react.core.models.Homepage;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Homepage.class,
    ComponentExporter.class
}, resourceType = "compass-login/components/react-home")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HomeImpl
    implements Homepage
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title4;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text4;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("title1")
    public String getTitle1() {
        return title1;
    }

    @Override
    @JsonProperty("text1")
    public String getText1() {
        return text1;
    }

    @Override
    @JsonProperty("title2")
    public String getTitle2() {
        return title2;
    }

    @Override
    @JsonProperty("text2")
    public String getText2() {
        return text2;
    }

    @Override
    @JsonProperty("title3")
    public String getTitle3() {
        return title3;
    }

    @Override
    @JsonProperty("text3")
    public String getText3() {
        return text3;
    }

    @Override
    @JsonProperty("title4")
    public String getTitle4() {
        return title4;
    }

    @Override
    @JsonProperty("text4")
    public String getText4() {
        return text4;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
