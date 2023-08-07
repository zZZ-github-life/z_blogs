<rss version="2.0">
    <channel>
        <title>
            <![CDATA[
                ${WEBSITENAME}
            ]]>
        </title>
        <description>
            <![CDATA[
                ${MOTTO}
            ]]>
        </description>
        <link>${DOMAIN}</link>
        <language>zh-cn</language>
        <generator>${WEBSITENAME}</generator>


        <#if blogList??  && (blogList?size > 0)  >
            <#list blogList as blog >
                <item>
                    <title>${blog.title}</title>
                    <link>${blog.href}</link>
                    <description>
                        <![CDATA[
                        ${blog.about}
                        ]]>
                    </description>
                    <pubDate>${blog.publishDate}</pubDate>
                    <author>${WEBSITENAME}</author>
                    <guid>${blog.href}</guid>
                </item>
            </#list>
        </#if>

    </channel>
</rss>