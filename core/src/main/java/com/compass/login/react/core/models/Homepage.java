package com.compass.login.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Homepage} Sling Model used for the {@code compass-login/components/react-home} component.
 * 
 */
@ConsumerType
public interface Homepage
    extends ComponentExporter
{

    @JsonProperty("title1")
    String getTitle1();

    @JsonProperty("text1")
    String getText1();

    @JsonProperty("title2")
    String getTitle2();

    @JsonProperty("text2")
    String getText2();

    @JsonProperty("title3")
    String getTitle3();

    @JsonProperty("text3")
    String getText3();

    @JsonProperty("title4")
    String getTitle4();

    @JsonProperty("text4")
    String getText4();

}
