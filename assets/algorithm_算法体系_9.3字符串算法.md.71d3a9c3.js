import{_ as s,c as a,o as n,N as l}from"./chunks/framework.cd9250a1.js";const A=JSON.parse('{"title":"字符串","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/算法体系/9.3字符串算法.md"}'),o={name:"algorithm/算法体系/9.3字符串算法.md"},p=l(`<h1 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h1><p><a href="https://lemire.me/blog/2017/07/07/are-your-strings-immutable/" target="_blank" rel="noreferrer">不可变字符串</a><a href="https://shimo.im/docs/5kykuLmt7a4DdjSP" target="_blank" rel="noreferrer">Atoi 代码示例</a></p><h2 id="字符串匹配算法" tabindex="-1">字符串匹配算法 <a class="header-anchor" href="#字符串匹配算法" aria-label="Permalink to &quot;字符串匹配算法&quot;">​</a></h2><ul><li><a href="https://www.ruanyifeng.com/blog/2013/05/boyer-moore_string_search_algorithm.html" target="_blank" rel="noreferrer">Boyer-Moore 算法</a></li><li><a href="https://blog.csdn.net/u012505432/article/details/52210975" target="_blank" rel="noreferrer">Sunday 算法</a></li><li><a href="https://shimo.im/docs/8G0aJqNL86wWrPUE" target="_blank" rel="noreferrer">字符串匹配暴力法代码示例</a></li><li><a href="https://shimo.im/docs/1wnsM7eaZ6Ab9j9M" target="_blank" rel="noreferrer">Rabin-Karp 代码示例</a></li><li><a href="https://www.bilibili.com/video/av11866460?from=search&amp;seid=17425875345653862171" target="_blank" rel="noreferrer">KMP 字符串匹配算法视频</a></li><li><a href="http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html" target="_blank" rel="noreferrer">字符串匹配的 KMP 算法</a></li></ul><h2 id="字符串基础问题" tabindex="-1">字符串基础问题 <a class="header-anchor" href="#字符串基础问题" aria-label="Permalink to &quot;字符串基础问题&quot;">​</a></h2><p>转换成小写字母（谷歌在半年内面试中考过） 最后一个单词的长度（苹果、谷歌、字节跳动在半年内面试中考过） 宝石与石头（亚马逊在半年内面试中考过） 字符串中的第一个唯一字符 （亚马逊、微软、Facebook 在半年内面试中考过） 字符串转换整数 (atoi) （亚马逊、微软、Facebook 在半年内面试中考过）</p><h2 id="字符串操作问题" tabindex="-1">字符串操作问题 <a class="header-anchor" href="#字符串操作问题" aria-label="Permalink to &quot;字符串操作问题&quot;">​</a></h2><p>最长公共前缀（亚马逊、谷歌、Facebook 在半年内面试中考过） 反转字符串（亚马逊、谷歌、苹果在半年内面试中考过） 反转字符串 II （亚马逊在半年内面试中考过） 翻转字符串里的单词（微软、字节跳动、苹果在半年内面试中考过） 反转字符串中的单词 III （微软、字节跳动、华为在半年内面试中考过） 仅仅反转字母（字节跳动在半年内面试中考过）</p><h2 id="异位词问题" tabindex="-1">异位词问题 <a class="header-anchor" href="#异位词问题" aria-label="Permalink to &quot;异位词问题&quot;">​</a></h2><p>有效的字母异位词 （Facebook、亚马逊、谷歌在半年内面试中考过） 字母异位词分组（亚马逊在半年内面试中常考） 找到字符串中所有字母异位词（Facebook 在半年内面试中常考）</p><h2 id="回文串问题" tabindex="-1">回文串问题 <a class="header-anchor" href="#回文串问题" aria-label="Permalink to &quot;回文串问题&quot;">​</a></h2><p>验证回文串（Facebook 在半年内面试中常考） 验证回文字符串 Ⅱ（Facebook 在半年内面试中常考） 最长回文子串（亚马逊、字节跳动、华为在半年内面试中常考）</p><h2 id="最长子串、子序列问题" tabindex="-1">最长子串、子序列问题 <a class="header-anchor" href="#最长子串、子序列问题" aria-label="Permalink to &quot;最长子串、子序列问题&quot;">​</a></h2><p>最长公共子序列（亚马逊、字节跳动、谷歌在半年内面试中考过） 编辑距离（亚马逊、字节跳动、谷歌在半年内面试中考过） 最长回文子串（亚马逊、华为、字节跳动在半年内面试常考）</p><h2 id="字符串-dp-问题" tabindex="-1">字符串 +DP 问题 <a class="header-anchor" href="#字符串-dp-问题" aria-label="Permalink to &quot;字符串 +DP 问题&quot;">​</a></h2><p>正则表达式匹配（Facebook、微软、字节跳动在半年内面试中考过） 题解： <a href="https://leetcode-cn.com/problems/regular-expression-matching/solution/ji-yu-guan-fang-ti-jie-gen-xiang-xi-de-jiang-jie-b/" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/regular-expression-matching/solution/ji-yu-guan-fang-ti-jie-gen-xiang-xi-de-jiang-jie-b/</a> 通配符匹配（Facebook、微软、字节跳动在半年内面试中考过） 不同的子序列（MathWorks 在半年内面试中考过）</p><h2 id="习题" tabindex="-1">习题 <a class="header-anchor" href="#习题" aria-label="Permalink to &quot;习题&quot;">​</a></h2><p>简单</p><p>字符串中的第一个唯一字符 （亚马逊、微软、Facebook 在半年内面试中考过） 反转字符串 II （亚马逊在半年内面试中考过） 翻转字符串里的单词（微软、字节跳动、苹果在半年内面试中考过） 反转字符串中的单词 III （微软、字节跳动、华为在半年内面试中考过） 仅仅反转字母（字节跳动在半年内面试中考过） 同构字符串（谷歌、亚马逊、微软在半年内面试中考过） 验证回文字符串 Ⅱ（Facebook 在半年内面试中常考） 中等</p><p>在学习总结中，写出不同路径 2 这道题目的状态转移方程。 最长上升子序列（字节跳动、亚马逊、微软在半年内面试中考过） 解码方法（字节跳动、亚马逊、Facebook 在半年内面试中考过） 字符串转换整数 (atoi) （亚马逊、微软、Facebook 在半年内面试中考过） 找到字符串中所有字母异位词（Facebook 在半年内面试中常考） 最长回文子串（亚马逊、字节跳动、华为在半年内面试中常考） 困难</p><p>最长有效括号（亚马逊、字节跳动、华为在半年内面试中考过） 赛车（谷歌在半年内面试中考过） 通配符匹配（Facebook、微软、字节跳动在半年内面试中考过） 不同的子序列（MathWorks 在半年内面试中考过）</p><h2 id="转换成小写字母" tabindex="-1">转换成小写字母 <a class="header-anchor" href="#转换成小写字母" aria-label="Permalink to &quot;转换成小写字母&quot;">​</a></h2><p>实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。 输入: &quot;Hello&quot; 输出: &quot;hello&quot;</p><h2 id="最后一个单词的长度" tabindex="-1">最后一个单词的长度 <a class="header-anchor" href="#最后一个单词的长度" aria-label="Permalink to &quot;最后一个单词的长度&quot;">​</a></h2><p>给定一个仅包含大小写字母和空格 &#39; &#39; 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。</p><p>如果不存在最后一个单词，请返回 0 。 说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。</p><p>示例: 输入: &quot;Hello World&quot; 输出: 5</p><h2 id="宝石与石头" tabindex="-1">宝石与石头 <a class="header-anchor" href="#宝石与石头" aria-label="Permalink to &quot;宝石与石头&quot;">​</a></h2><p>给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。</p><p>J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此&quot;a&quot;和&quot;A&quot;是不同类型的石头。</p><p>输入: J = &quot;aA&quot;, S = &quot;aAAbbbb&quot; 输出: 3</p><h2 id="字符串中的第一个唯一字符" tabindex="-1">字符串中的第一个唯一字符 <a class="header-anchor" href="#字符串中的第一个唯一字符" aria-label="Permalink to &quot;字符串中的第一个唯一字符&quot;">​</a></h2><p>给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。 s = &quot;leetcode&quot; 返回 0</p><p>s = &quot;loveleetcode&quot; 返回 2 题解一： 暴力法 On2</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> firstUniqChar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isUniq</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">isUniq</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">isUniq</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>二： 用map 时间复杂度On</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> firstUniqChar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">map</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">map</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">map</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">map</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]] </span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">map</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,37),e=[p];function t(r,c,F,y,i,D){return n(),a("div",null,e)}const h=s(o,[["render",t]]);export{A as __pageData,h as default};
