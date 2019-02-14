'use strict'

const responseObject = {
"watts":
    {
        "data": [0,129,163,272,272,373,74,74,0,0,0,0,0,126,129,148,70,48,48,49,209,248,265,270,299,289,261,244,240,241,241,232,235,235,185,173,202,225,235,246,236,211,206,223,223,192,141,126,108,61,17,0,0,0,0,150,266,282,261,247,184,70,65,243,297,314,358,383,375,364,355,366,348,315,339,356,371,391,396,396,393,387,378,376,373,366,365,355,306,276,299,285,300,308,303,294,284,285,281,281,283,287,284,281,280,278,279,290,297,301,286,276,275,275,274,279,290,306,319,317,315,301,286,252,225,241,247,221,181,79,0,0,0,0,0,0,64,145,259,230,254,249,197,161,235,293,245,234,236,257,276,274,251,252,251,252,250,248,250,247,237,229,220,184,76,15,0,0,0,0,0,0,0,0,0,0,0,null,229,240,303,360,403,372,328,303,311,286,274,283,278,262,284,309,311,286,272,257,244,231,264,287,276,263,254,227,238,284,290,275,265,262,261,262,275,292,298,278,278,287,292,293,288,280,276,267,282,288,294,302,315,298,297,292,281,277,285,281,274,273,274,273,275,269,267,268,266,267,269,253,246,249,248,247,257,259,256,256,280,282,275,258,173,65,0,0,0,0,0,0,40,0,0,0,null,219,276,268,336,324,353,362,426,411,470,451,408,361,340,333,324,323,319,300,294,289,288,287,272,250,236,251,274,273,267,267,267,273,277,290,289,259,249,249,252,249,243,235,245,243,234,238,235,242,242,241,235,232,235,239,240,245,245,237,234,238,227,218,225,233,241,238,244,246,234,225,210,200,190,178,148,127,119,142,181,214,227,217,207,206,150,44,0,0,0,0,0,91,299,357,293,288,294,271,254,254,263,264,266,254,249,240,234,241,250,251,250,263,276,349,553,527,321,261,220,225,232,230,202,212,248,272,265,256,251,247,241,236,291,325,297,284,201,64,0,0,0,0,0,0,0,null,298,363,392,364,337,280,262,269,294,283,249,242,274,279,281,294,296,284,290,313,322,312,311,313,320,314,303,321,341,344,332,326,335,332,323,325,329,331,332,336,337,322,319,335,328,258,222,270,287,310,317,263,209,134,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,231,365,351,351,328,361,348,305,290,297,315,314,295,276,266,262,252,255,269,261,250,234,229,241,265,280,273,251,237,240,248,258,256,255,253,265,270,250,228,240,228,206,199,174,174,183,169,143,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,290,318,327,345,378,386,409,436,508,508,562,574,419,304,322,324,296,305,290,242,248,287,313,291,288,288,287,281,275,262,252,255,260,260,276,318,341,309,288,261,269,294,284,284,281,284,282,248,234,238,248,287,290,275,267,243,235,257,255,243,246,244,244,247,226,219,244,235,275,300,260,252,243,242,247,245,246,254,247,259,276,269,258,250,260,258,253,249,263,284,294,282,258,258,263,248,248,247,254,260,257,257,257,251,243,251,249,240,246,250,241,245,255,259,262,259,253,260,260,251,267,288,283,264,266,267,246,221,244,279,281,278,261,260,253,248,245,240,237,235,244,259,272,252,236,231,234,259,267,258,261,261,253,236,228,252,256,242,250,273,274,256,243,232,229,238,261,276,268,260,251,249,239,243,259,237,236,229,209,211,213,205,221,235,227,214,211,222,236,229,226,219,233,240,239,230,233,241,258,246,238,241,246,256,249,233,248,262,257,245,246,255,261,260,265,261,248,235,251,274,284,287,277,267,276,276,284,298,299,331,371,355,337,331,322,310,300,301,305,301,305,314,307,308,304,297,300,295,304,334,340,316,311,310,314,275,223,269,269,259,261,261,268,266,270,271,253,247,245,247,253,251,251,240,236,228,246,246,283,285,271,244,241,246,237,241,257,262,254,230,213,206,200,188,171,195,237,245,234,238,241,236,236,232,218,218,212,216,270,246,222,254,279,265,253,247,259,264,240,218,218,199,216,246,237,223,249,275,258,247,221,211,216,214,216,219,220,235,251,249,251,235,223,235,235,245,250,249,226,230,230,240,241,241,254,273,261,262,268,273,276,284,252,243,243,272,309,293,303,307,323,305,280,301,311,313,309,314,307,309,304,301,296,286,284,287,286,281,277,284,285,296,299,298,285,285,296,296,283,269,218,171,140,89,93,230,309,353,362,385,365,381,363,319,271,237,239,223,217,226,232,221,232,226,208,211,210,192,235,266,229,229,231,226,244,257,247,238,236,240,245,267,272,253,230,231,233,232,152,42,0,0,0,0,0,0,0,0,0,0,0,284,273,294,268,283,316,284,260,240,252,277,252,246,259,254,249,246,233,215,223,227,216,193,195,214,227,215,220,229,212,229,257,258,251,240,223,201,230,274,271,250,226,229,247,231,208,194,166,148,182,194,192,192,174,127,123,191,232,241,235,230,236,247,233,215,231,241,246,238,238,261,260,251,248,250,257,264,269,266,271,268,278,306,307,288,286,281,280,287,312,306,313,264,249,286,313,320,324,313,302,288,292,291,301,300,307,295,288,284,300,292,280,293,291,288,259,246,266,272,275,273,268,267,262,265,268,264,261,253,263,272,275,276,273,273,269,267,263,260,254,258,263,270,268,267,267,270,274,290,301,277,277,258,248,255,255,278,276,269,264,261,266,272,266,259,258,262,265,266,268,262,262,263,258,263,271,263,268,262,272,274,274,267,266,261,265,262,258,259,266,269,262,269,275,276,275,279,270,270,269,275,276,279,279,276,271,278,280,268,254,254,257,272,283,280,265,268,269,269,277,274,290,309,298,280,281,271,248,247,248,251,261,275,270,256,244,237,243,245,246,280,291,254,243,235,227,217,218,231,249,264,238,235,234,222,230,242,238,230,226,235,232,248,274,286,269,253,238,230,228,227,239,241,230,225,227,224,231,246,242,236,237,238,227,226,231,260,272,272,278,263,260,286,313,334,297,292,290,292,295,291,290,286,278,272,272,307,333,357,317,310,334,316,296,311,322,333,342,333,332,324,326,324,320,275,222,234,266,267,263,265,272,275,263,249,235,237,275,306,290,280,278,273,262,266,268,270,269,265,265,259,248,257,268,254,263,269,275,261,265,270,263,245,234,236,229,235,236,243,249,257,259,262,243,219,214,226,227,205,191,189,200,212,260,281,246,237,229,227,235,255,265,266,263,264,264,257,244,248,261,263,262,265,268,267,267,276,282,281,279,276,279,293,300,296,285,279,286,283,296,292,276,272,280,281,287,297,296,296,291,286,274,273,272,265,272,281,288,291,294,286,282,282,290,282,283,283,289,289,300,294,291,284,281,280,273,273,273,272,283,293,291,305,308,311,302,348,376,333,313,331,331,346,342,333,322,309,287,277,254,262,266,258,247,242,224,213,230,243,227,202,192,182,119,132,198,204,204,169,176,208,196,174,165,174,201,219,187,166,190,218,222,229,225,212,204,191,211,239,212,212,200,199,194,193,203,217,238,241,235,227,239,260,259,258,256,262,276,285,292,269,258,277,286,285,300,307,307,272,291,287,279,288,288,318,313,292,303,311,310,297,305,316,333,340,338,334,327,317,321,325,329,334,339,332,330,328,336,344,341,330,335,329,331,335,333,334,346,342,342,338,341,342,343,337,329,334,342,334,336,338,338,333,331,329,328,328,325,328,321,319,315,331,339,336,335,338,337,333,341,347,337,322,321,328,320,317,317,314,312,308,313,339,342,328,334,330,332,333,320,310,315,324,332,343,345,340,338,341,340,350,358,340,332,346,339,338,350,343,362,384,361,345,350,364,349,340,340,349,353,365,362,341,334,334,324,314,285,332,382,358,320,242,195,220,241,222,198,201,196,198,243,264,256,240,229,211,208,204,193,221,223,203,179,168,199,223,208,194,178,167,190,219,218,221,245,250,225,194,187,228,252,249,251,250,229,222,243,252,233,219,228,251,256,231,212,191,196,176,154,144,146,147,162,164,122,114,173,180,176,156,147,158,163,162,166,157,145,151,155,170,189,191,188,202,205,198,206,217,231,234,252,284,290,252,246,266,263,265,285,284,281,286,283,283,275,283,290,275,278,285,294,319,319,301,305,287,271,293,307,260,247,280,303,322,315,315,309,323,334,344,346,337,328,320,324,331,322,335,346,337,326,329,327,325,337,328,325,321,325,316,311,309,317,323,342,359,351,358,338,334,354,361,325,328,325,311,321,322,342,342,352,342,324,313,315,313,318,322,319,311,324,326,313,301,298,293,297,269,280,274,287,283,284,276,279,272,254,254,269,294,284,265,258,259,266,265,265,272,272,279,276,281,279,276,276,271,281,278,267,266,267,266,262,265,273,273,300,300,291,266,263,256,274,294,313,312,283,269,247,235,253,263,212,177,172,169,177,192,184,163,177,199,192,176,170,172,197,207,182,172,181,184,187,177,151,127,117,148,176,158,175,168,114,45,0,0,0,0,0,0,0,80,188,239,267,264,251,217,203,205,187,205,241,236,220,217,225,225,220,239,242,217,212,230,246,255,264,282,265,236,253,261,255,254,274,281,285,288,282,270,283,279,270,262,213,81,11,0,0,0,0,0,314,320,316,320,318,306,276,274,251,239,246,254,231,220,229,229,221,218,228,225,211,188,171,160,156,159,158,147,144,139,136,132,124,124,125,125,125,142,198,223,200,181,151,159,186,195,192,181,169,162,169,196,196,220,205,184,178,187,186,183,183,181,178,175,172,169,155,149,144,148,145,138,139,177,217,218,183,182,171,168,167,184,214,225,197,135,138,220,235,244,239,244,254,242,220,214,251,268,256,244,242,228,226,233,229,208,186,188,193,226,236,209,215,234,224,198,193,204,207,209,215,226,241,250,234,226,221,220,234,238,240,233,242,255,246,243,236,231,233,235,237,229,228,231,235,237,237,235,240,233,232,229,225,223,228,230,230,208,184,208,225,219,216,213,210,207,228,259,249,237,229,228,232,239,243,235,223,223,199,185,184,176,172,170,165,154,157,186,186,186,207,212,212,189,211,228,219,202,200,216,214,198,195,187,187,185,185,193,195,190,202,217,226,212,206,219,221,224,222,221,223,231,230,232,223,199,210,222,212,211,220,222,217,198,171,169,184,203,215,244,265,245,246,260,262,259,262,282,275,266,283,292,300,293,309,319,313,327,327,315,312,300,304,308,304,304,312,306,301,279,262,256,258,261,268,257,254,249,236,239,252,242,226,273,275,290,274,258,259,244,223,224,208,187,211,212,185,173,190,238,256,225,182,169,197,210,201,179,182,175,138,149,181,208,193,153,152,169,193,219,237,221,209,224,208,195,204,212,180,140,127,118,110,106,119,136,147,165,161,176,197,214,206,198,212,211,210,228,236,233,261,273,260,232,231,252,289,312,340,370,362,325,307,320,315,296,294,291,292,287,270,274,298,293,284,289,290,294,283,293,304,308,306,297,300,297,284,271,267,265,260,269,283,294,315,312,300,286,289,295,281,269,280,282,266,220,176,200,269,345,316,290,265,254,266,265,241,229,284,347,353,333,300,294,300,296,295,284,290,309,314,350,345,320,310,297,280,281,283,289,294,293,292,295,302,309,312,308,308,537,783,894,936,883,915,880,819,861,819,824,787,721,641,521,283,283,227,246,288,279,275,275,266,265,285,304,302,278,271,285,278,272,275,289,266,272,319,319,322,296,291,282,271,280,295,290,271,273,297,316,316,310,291,278,293,329,330,304,269,264,304,327,322,290,267,258,221,138,29,0,0,0,0,0,0,null,385,264,289,289,271,268,278,283,290,291,273,289,298,304,501,692,693,700,656,627,594,563,573,577,542,503,521,544,531,434,306,255,255,306,322,303,289,268,265,263,282,297,301,295,296,294,280,276,276,300,330,312,299,292,294,296,286,282,309,328,316,303,300,294,297,305,297,284,284,286,267,279,298,300,296,296,322,347,312,298,277,252,262,285,295,291,289,292,297,299,303,303,297,298,292,286,277,285,294,291,289,299,304,312,431,505,534,517,562,596,618,563,566,618,580,567,584,582,541,376,199,225,270,291,281,266,264,276,289,289,265,256,256,266,285,296,307,325,304,277,273,254,267,294,297,288,297,317,309,297,292,279,259,272,306,313,300,277,287,306,306,315,339,341,332,297,282,293,288,298,304,311,305,334,320,316,329,324,308,285,283,285,286,287,293,290,276,272,290,288,293,295,317,357,497,618,675,693,682,664,650,620,548,553,635,596,540,530,496,348,241,252,284,283,287,312,286,284,285,284,286,260,252,259,262,252,277,318,285,291,319,298,282,266,259,272,277,274,243,196,196,181,167,144,136,150,147,156,169,190,197,211,225,207,177,193,216,232,242,248,239,245,270,281,265,252,250,271,301,307,312,304,287,284,280,282,293,286,286,301,293,285,294,358,540,612,551,534,541,540,538,566,559,559,543,505,512,518,392,392,293,241,248,272,324,345,329,314,308,291,289,286,279,310,279,152,70,95,149,172,151,108,93,106,132,140,149,159,173,172,166,161,159,158,152,150,149,149,149,164,187,192,174,176,166,147,148,148,149,154,164,190,195,198,196,193,199,199,199,202,200,193,194,196,195,190,186,187,176,178,177,159,135,137,136,139,153,160,157,155,148,139,135,132,125,127,137,133,128,141,166,175,168,150,177,186,171,154,130,126,139,152,146,134,145,164,184,178,171,159,142,122,109,112,105,96,123,146,129,112,97,89,99,115,127,134,146,156,167,164,155,191,214,216,194,188,181,186,181,188,181,173,167,173,181,181,159,158,182,202,186,176,175,170,181,185,169,152,149,148,151,141,132,130,127,164,178,157,161,171,161,136,125,130,100,44,21,66,131,175,170,165,159,153,170,178,186,201,210,199,176,204,249,266,243,240,226,235,233,232,211,206,251,261,246,239,236,228,212,215,222,235,222,212,210,219,212,205,212,213,216,214,206,206,200,195,197,195,192,188,178,189,201,200,193,186,182,187,196,199,193,190,189,188,209,232,225,216,205,212,215,139,139,194,205,214,227,211,152,152,0,0,0,122,238,229,229,232,230,217,218,213,221,227,217,215,220,217,224,224,214,214,224,217,185,187,223,225,210,200,208,233,231,235,238,231,216,226,225,221,218,223,232,225,229,226,226,234,243,250,258,252,264,278,312,370,398,356,328,318,307,294,303,297,287,282,279,279,277,283,285,281,278,288,310,310,306,299,296,292,292,298,286,318,338,298,287,298,310,303,296,296,296,296,307,314,296,266,295,346,363,300,215,263,298,280,289,285,262,256,257,265,261,271,267,225,222,269,292,296,284,261,254,226,163,116,68,0,0,0,92,272,365,384,336,318,322,319,293,293,313,316,315,307,307,319,447,620,684,664,634,727,759,751,704,695,672,605,584,595,543,412,257,245,297,289,292,302,273,242,243,235,267,331,318,298,279,282,262,258,271,270,258,268,267,265,317,319,310,307,288,278,270,290,296,295,308,300,274,288,312,309,292,285,291,283,276,281,283,290,303,321,313,306,318,326,313,298,300,298,291,273,223,199,154,70,36,24,0,0,0,0,0,null,501,545,620,677,614,623,617,630,643,623,649,601,575,587,603,597,574,536,402,348,300,324,340,324,307,288,286,286,285,293,309,324,323,317,333,312,302,310,308,297,293,286,282,280,290,311,332,322,299,307,306,281,276,302,357,358,318,292,282,289,287,281,277,288,289,284,281,280,293,323,332,295,288,288,276,254,268,306,319,291,291,298,301,306,291,292,294,298,313,313,316,315,430,568,628,621,621,612,609,584,579,589,549,517,512,514,463,337,270,291,283,267,256,268,270,259,246,224,236,249,170,46,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,171,179,65,62,94,34,34,36,359,438,398,367,343,334,306,306,315,281,272,270,270,290,321,346,358,314,304,298,283,297,290,284,293,289,286,333,333,335,308,299,269,241,241,408,612,627,646,693,719,713,696,703,647,623,606,532,478,466,426,325,237,268,250,263,295,303,258,279,325,310,320,319,305,278,274,277,282,288,292,309,326,340,323,305,305,308,303,290,290,291,275,274,292,320,333,327,306,308,309,286,272,281,299,300,299,284,269,264,273,285,283,299,322,307,291,286,274,274,282,286,300,304,293,284,288,292,292,288,284,289,306,303,312,329,415,555,598,566,628,688,646,632,612,603,585,548,545,583,609,467,303,292,312,295,292,294,295,309,319,303,288,280,281,239,137,44,16,41,45,26,57,89,113,118,120,145,155,162,185,179,167,164,163,172,146,114,139,151,158,159,158,173,180,175,160,158,152,154,161,163,160,161,162,156,146,160,188,187,186,188,185,176,176,178,178,167,173,173,169,155,148,156,169,161,167,172,175,175,164,161,167,152,149,158,172,186,181,177,177,170,159,157,178,180,180,184,179,169,162,156,157,161,162,166,173,174,164,162,162,166,163,156,148,147,153,148,146,149,150,148,150,171,185,191,158,160,168,165,159,162,170,180,187,187,177,176,187,190,174,169,156,140,131,135,141,152,153,167,177,171,163,147,128,111,111,82,81,89,80,40,17,17,17,119,130,123,96,86,93,99,93,83,79,34,34,0,0,0,85,106,120,119,68,89,136,162,148,160,157,157,139,127,146,156,156,152,143,139,157,159,126,52,0,0,0,51,142,138,120,60,0,0,0,40,123,176,193,207,211,206,204,200,200,197,190,189,189,196,191,172,158,162,148,131,127,150,162,163,164,152,141,131,128,113,62,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,156,129,138,137,86,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,81,182,189,151,139,151,154,147,159,187,185,155,162,186,210,181,120,81,110,146,136,133,229,307,293,298,269,266,276,295,300,314,310,289,289,257,130,0,0,0,0,0,0,0,0,0,null,0,274,300,273,302,323,347,366,366,353,366,372,373,383,371,428,425,402,348,328,334,341,325,306,320,327,314,310,315,318,383,379,321,306,296,298,310,328,323,297,282,284,294,300,297,302,298,290,292,295,286,257,242,283,338,341,339,329,306,274,268,277,296,300,284,285,381,540,636,614,598,643,636,596,594,660,631,587,548,555,559,548,417,258,251,275,261,259,268,256,249,245,238,258,287,293,290,279,266,262,262,271,259,282,303,292,280,273,274,279,289,287,291,294,294,295,293,281,269,266,266,275,290,301,314,318,290,285,275,273,274,277,293,306,312,308,291,273,266,272,295,292,297,315,304,291,281,275,283,283,303,291,285,296,290,269,257,267,399,568,605,558,592,619,606,585,595,604,592,555,530,511,392,270,271,283,291,291,282,270,269,271,262,270,277,273,270,258,243,222,252,280,274,273,288,292,269,269,268,279,297,319,320,301,308,316,320,320,310,297,284,293,295,278,272,271,282,298,305,310,291,269,273,294,290,282,289,286,269,283,305,283,279,313,334,307,282,269,246,233,272,333,300,276,274,286,311,394,549,609,629,639,603,574,597,597,576,568,556,555,520,422,301,254,250,283,304,271,267,262,253,260,268,274,287,297,289,266,246,281,307,296,310,327,319,294,289,253,215,268,310,297,317,309,277,261,280,293,279,278,288,302,303,300,290,270,277,291,294,294,295,298,306,309,307,285,293,301,273,270,296,290,310,360,356,313,296,282,297,326,343,316,288,281,285,277,262,404,610,657,634,596,535,483,468,447,438,426,413,413,402,314,195,186,230,237,237,223,195,212,251,286,298,281,273,268,250,246,261,271,266,273,279,284,292,273,275,296,310,333,331,328,308,299,284,285,303,300,310,304,292,296,285,287,283,286,286,285,269,276,297,288,280,283,274,269,280,316,332,322,304,279,259,256,248,256,284,299,286,290,281,261,250,239,243,247,336,441,532,515,516,540,539,532,530,500,488,501,528,513,477,405,328,315,321,358,322,281,281,268,268,310,327,322,312,263,128,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,63,85,97,101,113,132,134,120,105,98,101,118,133,128,115,115,109,102,107,56,56,115,126,113,112,104,90,103,132,145,145,135,140,139,136,133,141,150,159,150,145,151,160,173,176,164,156,165,178,196,186,181,167,155,165,160,158,155,158,155,151,150,158,139,110,120,117,93,85,94,103,116,117,105,99,97,101,100,89,84,81,79,40,0,0,0,0,0,0,0,0,0,0,0,68,131,102,83,82,106,112,107,117,122,126,157,171,160,150,127,113,123,142,147,135,125,131,141,142,137,119,115,108,99,62,0,0,0,0,23,92,134,159,150,120,107,95,95,96,91,94,96,98,100,97,92,96,99,102,102,105,103,99,99,103,113,119,117,107,111,120,125,127,142,154,163,184,192,200,186,188,224,235,235,245,243,265,290,295,351,404,401,392,378,380,363,314,310,350,353,345,349,356,350,345,333,320,287,284,285,268,281,288,286,289,287,274,254,276,287,273,248,247,237,238,260,276,260,247,224,187,186,202,214,203,178,149,145,170,168,149,139,126,116,111,98,81,39,27,27,91,96,118,200,233,214,210,192,177,176,173,169,164,205,228,192,175,163,165,182,181,165,163,155,190,204,197,184,176,188,193,185,192,210,213,219,225,214,210,221,209,185,165,170,191,209,212,217,202,202,186,194,187,164,145,140,140,134,128,128,143,148,140,129,122,122,126,115,116,123,119,123,120,112,85,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,135,132,133,137,129,120,127,123,120,133,146,145,145,155,179,182,177,170,165,163,167,208,248,210,210,196,193,190,190,189,183,189,202,198,199,209,216,190,190,189,198,216,216,206,207,186,172,165,161,176,171,171,157,162,182,196,190,180,178,177,166,171,196,212,205,178,207,264,254,229,267,311,296,308,331,296,287,287,269,261,262,264,285,336,337,317,317,309,296,295,292,291,296,312,319,331,295,273,290,307,325,317,313,338,363,347,345,338,319,312,323,309,288,284,269,272,286,296,302,315,299,292,294,289,282,294,301,295,298,291,280,283,291,296,287,285,286,297,289,284,282,285,285,280,279,271,270,273,274,276,303,312,305,300,295,288,292,297,295,304,404,501,532,553,599,621,600,577,574,576,573,565,568,560,461,336,231,253,288,278,311,316,293,282,279,296,290,282,267,260,276,289,284,301,310,311,297,280,277,317,333,318,293,276,272,311,318,279,265,272,284,309,343,342,310,294,282,272,274,276,290,325,326,306,298,284,272,270,279,294,294,282,292,297,295,295,279,281,299,301,313,323,305,278,273,287,286,286,294,334,438,482,528,545,526,493,472,476,489,499,502,515,518,491,462,354,267,255,256,271,262,260,274,303,320,306,303,285,270,263,260,257,253,257,252,270,301,309,322,312,289,271,263,287,299,301,292,292,258,293,287,275,292,291,290,306,305,315,328,334,322,314,314,286,286,287,302,308,317,318,314,312,298,292,287,276,293,294,290,286,286,289,293,292,299,298,298,289,292,297,404,478,527,502,525,514,509,509,517,505,465,470,463,479,538,540,376,285,316,317,312,268,260,271,270,264,244,234,262,291,279,263,285,296,282,283,295,287,258,251,257,267,270,259,259,276,304,312,299,295,289,284,277,282,284,283,282,276,282,288,274,273,290,287,282,280,288,286,278,269,267,268,276,284,288,290,278,302,302,301,310,305,296,291,284,269,259,245,273,311,313,405,485,494,483,542,585,540,522,518,499,517,494,477,476,416,275,168,184,227,265,265,235,235,284,337,311,297,289,283,289,305,309,300,302,284,270,276,281,291,296,293,309,318,340,317,297,281,281,277,283,270,267,265,273,279,292,282,287,297,292,286,290,297,293,281,273,270,277,276,283,298,311,318,322,328,313,300,308,308,305,310,322,303,296,290,308,309,314,322,398,484,570,565,553,545,550,538,525,500,523,520,510,471,467,430,267,261,287,310,372,378,341,339,323,323,316,316,316,283,197,126,158,213,216,221,218,222,223,227,228,231,232,221,215,220,218,219,238,245,236,234,242,243,238,241,246,241,238,217,219,242,255,253,264,267,268,264,254,262,266,253,251,254,244,256,271,252,240,237,238,227,229,224,224,229,235,259,259,253,242,248,242,231,233,225,212,212,210,212,199,205,204,207,201,188,179,183,183,192,197,183,165,178,190,191,181,174,164,156,151,151,158,159,160,164,164,188,187,172,165,148,134,142,141,141,136,128,126,129,121,113,111,144,163,143,117,114,116,105,103,115,135,146,134,117,102,60,37,37,128,111,109,107,104,112,133,131,132,163,187,182,190,190,232,242,215,186,191,201,195,188,188,167,163,169,160,148,156,153,137,132,134,144,173,189,185,171,179,176,168,174,190,195,184,167,160,142,127,135,197,230,184,146,133,116,70,102,158,194,209,197,188,193,193,195,199,206,210,209,214,201,192,199,211,216,215,221,213,203,205,205,204,213,223,228,232,223,218,224,234,239,243,241,238,237,237,237,236,233,230,238,234,229,228,230,234,242,242,234,227,219,216,206,199,216,236,223,220,220,204,185,182,177,171,184,192,188,185,166,145,129,73,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,230,209,291,326,334,343,349,366,369,368,350,342,341,309,302,297,298,299,302,289,292,315,346,333,319,297,296,292,273,272,275,273,277,314,320,295,289,303,283,274,275,266,271,293,301,300,285,295,305,308,302,299,277,258,261,282,289,290,290,283,283,274,265,269,279,296,295,282,278,278,284,295,285,281,275,269,261,261,261,272,282,265,274,285,275,268,266,272,279,275,269,264,241,208,259,286,264,367,579,690,634,613,617,592,599,600,600,592,599,622,622,600,544,419,309,288,288,291,284,252,253,283,286,275,288,298,307,276,250,259,268,264,270,268,257,249,248,251,247,278,289,276,275,280,284,276,263,271,282,285,284,287,306,321,298,285,282,260,259,269,271,250,208,171,111,111,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,613,556,582,706,700,762,741,749,758,763,733,760,720,549,350,310,340,314,321,313,299,272,265,262,257,266,298,305,300,292,291,304,301,303,304,296,278,273,294,307,311,325,316,304,288,292,289,282,282,295,300,286,274,299,340,338,303,283,290,328,302,287,284,284,287,295,291,279,264,263,299,319,299,276,279,297,280,276,298,329,321,281,270,288,314,312,308,302,295,430,583,583,576,573,586,590,567,514,455,440,430,412,393,330,277,270,290,292,242,246,286,283,274,256,224,271,317,296,295,294,281,294,260,238,291,323,316,290,296,294,294,298,301,302,295,274,250,234,286,293,294,286,281,280,276,258,249,252,274,293,274,284,280,268,267,267,262,265,270,269,269,282,276,293,307,301,296,274,259,246,274,303,308,315,294,265,247,262,310,367,426,443,494,472,442,431,424,434,451,454,448,457,444,370,249,241,312,311,288,253,238,268,309,312,281,248,247,256,256,238,233,260,285,256,273,289,259,245,248,248,257,196,81,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,270,274,274,319,323,329,310,299,273,281,251,251,279,299,280,259,245,221,236,263,281,281,286,286,272,299,404,552,552,708,744,739,718,688,657,696,732,693,656,628,616,599,466,403,436,390,340,330,347,352,342,309,300,331,348,318,251,114,27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,91,163,180,157,139,127,133,140,129,123,125,121,119,121,143,176,186,173,166,173,173,172,187,168,150,127,117,119,142,171,171,164,176,177,178,184,196,210,233,256,255,260,299,284,255,236,207,173,174,185,173,171,174,177,168,169,168,161,152,154,159,151,140,152,173,189,67,0,0,0,109,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,270,232,226,201,208,128,38,0,0,0,0,0,0,125,182,167,155,144,145,173,201,221,203,171,153,150,139,119,104,100,109,138,191,241,216,201,200,195,176,161,152,145,141,145,117,0,0,0,0,0,0,0,79,147,152,146,135,122,120,121,120,124,134,140,151,158,151,144,142,156,173,181,189,210,238,242,220,213,210,207,204,204,209,214,223,223,213,212,204,202,200,207,219,232,234,239,220,213,201,202,202,210,217,231,227,223,223,226,223,221,244,264,258,263,270,272,271,261,265,261,264,261,264,247,249,248,244,239,261,276,256,226,187,175,162,148,173,197,191,174,166,181,220,251,246,218,216,220,227,225,216,219,220,220,222,212,204,209,216,218,219,215,213,211,213,171,141,152,155,158,167,160,156,174,167,154,152,145,149,167,165,156,156,153,180,191,175,157,138,129,142,152,142,139,148,155,148,136,123,89,0,0,0,0,0,0,93,122,122,103,39,0,0,0,35,91,97,81,82,86,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,215,231,249,228,200,177,172,163,159,168,172,161,150,148,150,159,162,159,151,154,159,152,158,159,148,143,147,149,148,142,92,0,0,0,0,0,0,0,0,0,0,109,161,161,141,127,149,159,161,149,149,152,160,171,168,147,143,147,149,141,129,117,111,106,68,22,0,0,0,0,166,225,230,232,212,210,163,0,0,0,0,0,0,0,0,0,0,278,280,241,198,216,226,112,0,0,0,0,0,114,173,182,176,167,190,219,195,187,183,174,180,201,190,210,205,166,181,198,170,141,140,159,209,249,232,215,203,186,167,152,170,169,85,0,0,0,0,0,0,0,0,111,169,177,205,229,274,294,274,268,268,263,258,237,223,220,212,203,198,168,151,151,155,164,158,102,32,32,32,33,117,97,112,126,106,70,22,0,0,0,0,0,0,0,86,148,160,189,183,181,192,214,260,294,294,297,295,278,258,237,244,225,226,226,213,203,207,194,148,105,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,114,38,38,0,0,0,0,0,0,0,0,139,191,206,203,178,186,171,152,140,67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,216,272,301,309,319,302,279,251,241,239,265,249,234,224,216,201,209,231,246,261,282,285,259,254,250,266,266,259,256,254,247,233,240,239,242,248,240,232,228,233,222,209,210,220,226,226,217,213,225,255,252,252,242,234,231,235,226,217,213,226,233,231,243,244,251,255,257,256,255,265,269,273,277,267,257,270,278,275,282,283,295,288,286,282,293,280,265,261,261,262,259,252,252,246,257,263,266,265,264,261,261,263,248,253,253,256,255,257,250,242,233,228,235,239,217,220,209,188,192,180,172,168,157,169,203,230,234,239,222,189,192,217,254,252,244,232,233,233,242,248,252,251,243,245,234,225,226,219,211,205,190,158,126,73,0,0,0,0,0,0,60,16,0,0,0,0,0,0,101,195,228,232,243,248,227,210,180,159,178,208,202,165,156,191,168,120,0,0,0,0,0,0,0,0,0,87,181,212,205,173,157,151,143,136,147,164,165,174,210,229,213,188,193,207,214,222,238,238,234,229,234,226,217,215,211,195,163,88,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,242,201,232,248,252,292,292,301,326,326,302,291,282,276,275,270,275,280,291,295,280,285,275,290,300,285,281,281,289,279,272,270,282,282,280,274,269,283,284,275,274,268,276,292,303,294,204,61,33,81,81,83,295,301,277,266,294,314,308,282,251,222,188,111,111,43,47,47,47,268,268,241,220,197,171,87,0,0,0,0,157,261,237,252,292,292,294,304,313,304,292,312,327,311,319,333,291,258,261,268,201,198,179,189,185,99,0,0,0,0,0,73,135,148,156,155,158,182,214,229,237,242,230,225,222,223,218,207,210,212,230,231,236,216,223,224,228,238,239,237,232,237,240,240,230,228,217,198,198,203,192,130,40,56,56,56,208,192,189,195,185,184,178,118,0,0,0,0,28,53,44,0,0,0,0,0,0,199,294,302,291,274,267,273,276,278,278,266,268,261,265,261,250,273,284,254,225,247,258,248,255,253,242,240,236,241,245,245,232,224,213,199,201,213,218,219,227,236,245,246,251,258,262,260,244,228,223,219,218,212,190,172,163,169,159,145,157,182,203,194,161,137,155,188,191,175,170,169,168,177,183,179,175,172,173,172,169,165,157,153,156,156,164,168,155,146,141,134,135,137,131,153,162,147,120,110,107,80,54,57,54,0,0,0,0,0,0,0,0,0,0,132,169,181,199,215,218,207,202,201,202,204,150,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,269,307,287,301,293,290,270,274,260,262,287,309,300,242,234,230,214,155,155,155,184,157,174,189,228,268,246,258,253,247,234,227,225,218,227,236,234,229,223,230,224,227,232,245,241,233,216,210,219,221,223,227,228,227,217,240,258,240,240,237,235,235,216,220,222,223,235,226,227,231,231,233,235,245,253,229,229,188,167,148,126,116,118,115,132,162,162,163,188,207,187,183,177,163,152,149,157,165,168,171,185,195,194,203,219,214,210,195,175,155,161,161,155,148,154,165,169,169,194,216,201,194,177,151,138,141,164,169,163,187,218,188,166,157,144,140,147,158,158,186,177,171,162,161,160,163,169,165,154,167,163,138,134,171,163,144,135,131,133,136,128,135,152,166,192,200,181,170,155,172,223,221,196,194,197,200,200,191,193,197,202,202,203,211,214,212,220,228,236,235,229,225,221,229,231,238,241,240,227,213,203,198,198,199,197,187,179,186,184,180,170,166,165,161,148,108,0,0,0,0,0,0,0,0,0,0,164,199,205,184,162,143,115,100,55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,191,119,83,130,201,219,230,228,221,217,214,224,227,247,239,210,178,123,81,80,93,104,111,117,91,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    }


function maxPower(array) {
    return Math.max(...array);
}

console.log(maxPower(responseObject.watts.data));

//an array is a list of values, so I use an array to represent power numbers for each 1 second.
//this function finds the average of all the numbers in an array
function average(array) {
  let currentValue = 0;
  for(let i = 0; i < array.length; i++) {
    currentValue += array[i];
  }
  return currentValue/array.length;
}


//rollingAverage of 'seconds' duration
// array is an input (so you input "powerData") and "seconds" is the duration of the average power you want to find
// this formula USES the average formula from above to find every segment that is the duration you want and puts it into a 
// NEW array to use in the NEXT function.
function rollingAverage(array, seconds) {
  let newArray = [];
  for(let i = 0; i < array.length-1; i++) {
      if(i > seconds) {
      //array.slice is what creates sections so that you can find the average of the duration you want
    newArray.push(average(array.slice(i, i + seconds)))
    }
  }
  return newArray;
}


//findMax average of a given list
//so this combines the rolling average and finds the maximum value from the array in rollingaverage so that you get your single best effort of whatever duration you want. I could do 1 second, 50 seconds, all the way up to the whole ride.
function findMax(array, seconds) {
  if(seconds > 0) {
 return Math.max(...(rollingAverage(array, seconds)));
  }
  console.log('Please enter an integer greater than 0 for "seconds"')
  return 'Please enter an integer greater than 0 for "seconds"'
}



console.log(findMax(responseObject.watts.data, 301));

function normPow(array, startPoint = 0, duration = array.length - 1) {
  let normArray = rollingAverage(array, 30);
  for(let i = startPoint; i < duration; i++) {
    normArray = normArray.slice(i, i + duration).map(x => x ** 4);
    return average(normArray)**(1/4);
  }
  return 'Cannot get Normalized Power';
}

console.log(normPow(responseObject.watts.data, 500, 600));


/*Block for Oauth and Implementation of List Activities

Below is HOW I'll grant access and then gather data for the app.

*/
/*currently not needed
$('#step1').on('submit', function(event) {
    event.preventDefault();

})
*/
//get "code" from returned URL
let currentLocation;
let accessCode;

$('#step2').on('click', function (event) {
    event.preventDefault();
    //will be replaced after auth
    //currentLocation = window.location.search;
    currentLocation = 'https://mitchellgsides.github.io/Strava-PR-Lister/?state=&code=4c7521d00a802bd4c59309d1d2547bf8c22fea8b&scope=read,activity:write,activity:read_all,profile:write,profile:read_all,read_all';
    console.log(currentLocation);
    accessCode = currentLocation.split(/&|=/);
    console.log(accessCode[3]);
})

let accessToken;
let refreshToken;

$('#step3').on('click', function(event) {
    event.preventDefault();
    //postRequest
    $.post(`https://www.strava.com/oauth/token?client_id=32540&client_secret=b7abbcd02c9483f9007218aaf47f7a0e929e9ee1&code=${accessCode[3]}&grant_type=authorization_code`, function(data, status) {
      console.log("Data" + data + "Status: " + status);
      console.log(data);
      accessToken = data.access_token;
      refreshToken = data.refresh_token;
    })
    return accessToken, refreshToken;
  });

let activityPower;
let activityID;
let thisActivity;
let authenticatedAthlete;

$('#step4').on('click', function(event) {
    event.preventDefault();
    //get authenticatedAthlete
    $.get(`https://www.strava.com/api/v3/athlete/?access_token=${accessToken}`, function(data, status) {
      authenticatedAthlete = data.id;
    });
    let activityNames = $.get(`https://www.strava.com/api/v3/athletes/${authenticatedAthlete}/activities?access_token=${accessToken}`, function(data, status) {
      //empty previous requests
      $('#js-activity-list').empty();
      console.log(status);
      console.log(data[0].name);
      console.log(data);
      //generate list of available rides
      for(let i = 0; i < 30; i++) {
        $('#js-activity-list').append(`<li><a href="https://www.strava.com/activities/${data[i].id}/" class="js-activity-list-item" id=${data[i].id}">${data[i].name}</a></li>`);
        activityID = data[i].id;
        }
        //get link id for power data return request
        $('.js-activity-list-item').on('click', function(event) {
          event.preventDefault();
          let activityID = $(this).attr('id');
          console.log(activityID);
        //get power data for clicked activity
        thisActivity = $.get(`https://www.strava.com/api/v3/activities/${activityID}/streams/?access_token=${accessToken}&keys=watts&key_by_type=true/`, function(data, status) {
        if(data.hasOwnProperty('watts')) {
        activityPower = data.watts.data;
        console.log(data);
        } else {
        alert('This activity does not have power data.');
      }
    }, 'jsonp'
    )
  })
    } , 'jsonp');
})


function getPowerData(activity) {};


$('#step5').on('click', function(event) {
    event.preventDefault();

})