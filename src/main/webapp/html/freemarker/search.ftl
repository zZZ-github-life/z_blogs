<#--
    @author:  zZZ....
    @description: 搜索内容存储
    @date: 2022/12/7
-->
<?xml version="1.0" encoding="utf-8"?>
<search>

    <#if blogList??  && (blogList?size > 0)  >
        <#list blogList as blog >
            <entry>
                <title>${blog.title}</title>
                <link href="${blog.href}"/>
                <url>${blog.href}</url>

                <content type="html">
                    <![CDATA[
                        ${blog.contentHtml}
                    ]]>
                </content>

                <categories>

                    <category> ${blog.className} </category>

                </categories>


                <tags>
                    <#list blog.tagsName?split(",") as tagName>
                        <tag> ${tagName} </tag>
                    </#list>
                </tags>

            </entry>

        </#list>
    </#if>

</search>
