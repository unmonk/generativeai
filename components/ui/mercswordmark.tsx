import { FC } from "react";

interface MercsWordmarkProps {
  className?: string;
  fill?: string;
}

const MercsWordmark: FC<MercsWordmarkProps> = ({ className, fill }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1845.000000pt"
      height="797.000000pt"
      viewBox="0 0 1845.000000 797.000000"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <g
        transform="translate(0.000000,797.000000) scale(0.100000,-0.100000)"
        fill={fill || "#000000"}
        stroke="none"
      >
        <path
          d="M820 7953 c0 -4 112 -428 249 -941 l249 -933 -20 -87 c-11 -48 -64
-293 -118 -544 -54 -252 -102 -463 -106 -470 -5 -7 -92 -131 -195 -274 l-187
-261 87 -224 87 -223 -93 -430 c-51 -237 -233 -1079 -403 -1871 -170 -792
-320 -1491 -334 -1553 -13 -61 -21 -112 -17 -112 4 0 205 63 447 141 610 195
812 257 1169 359 1823 517 3839 844 5885 954 611 33 897 40 1620 40 720 0
1010 -7 1620 -40 2139 -113 4271 -463 6208 -1020 282 -80 1447 -440 1466 -451
12 -8 30 -73 -280 1027 l-275 975 -270 1185 c-149 652 -367 1610 -485 2130
-203 896 -594 2593 -597 2597 -1 1 -137 -5 -302 -12 -1012 -47 -2289 -91
-3370 -115 -1171 -27 -1586 -31 -3275 -37 -2566 -8 -4222 16 -6375 92 -721 26
-2102 86 -2302 100 -46 3 -83 2 -83 -2z m1941 -1163 c228 -17 432 -33 454 -36
l40 -5 79 -217 c81 -225 235 -622 241 -622 2 0 137 174 301 386 164 212 304
389 312 392 14 5 692 -24 697 -30 2 -2 -28 -221 -66 -488 -37 -267 -96 -690
-129 -940 l-62 -455 21 -40 c11 -22 33 -63 50 -91 l30 -52 -76 -98 -76 -98
-92 -670 c-51 -369 -114 -833 -140 -1031 -27 -198 -51 -364 -55 -368 -4 -4
-192 -45 -418 -90 -395 -80 -412 -82 -412 -63 0 12 38 257 84 546 47 289 124
768 171 1064 l87 540 -46 86 c-25 48 -46 92 -46 98 0 5 36 56 80 113 44 56 80
107 80 113 0 6 27 180 60 386 32 206 58 375 57 377 -2 1 -141 -180 -311 -403
-170 -222 -312 -406 -316 -409 -8 -5 -138 279 -276 604 l-79 185 -28 -150
c-15 -82 -52 -273 -81 -424 l-54 -275 44 -94 c24 -52 44 -97 44 -101 0 -4 -38
-57 -84 -117 -80 -105 -85 -114 -100 -189 -8 -43 -107 -562 -220 -1152 -113
-590 -206 -1076 -206 -1080 -1 -23 -35 -37 -220 -92 -113 -34 -306 -93 -428
-131 -123 -39 -226 -68 -230 -65 -6 7 -2 28 309 1466 l219 1015 -41 103 -40
103 23 32 c12 18 52 73 89 124 l68 91 86 404 c48 221 136 627 196 901 60 274
109 500 109 502 0 3 -26 5 -58 5 l-59 0 -61 229 c-34 126 -62 235 -62 242 0 9
17 10 64 6 35 -3 249 -20 477 -37z m12428 -155 l181 -137 72 43 c40 23 118 71
172 107 67 43 101 60 106 52 9 -15 350 -1502 346 -1507 -2 -3 -750 48 -752 50
-1 1 -41 198 -90 437 l-89 435 -355 -4 c-195 -2 -357 -5 -359 -7 -2 -1 30
-186 70 -411 l74 -408 74 -100 c40 -55 77 -104 81 -110 4 -5 -12 -54 -36 -108
l-43 -97 15 -83 c8 -45 17 -91 19 -103 4 -18 14 -22 77 -27 40 -3 213 -21 385
-38 l311 -33 179 -150 c98 -82 302 -256 453 -385 151 -130 282 -243 292 -251
13 -11 66 -227 204 -834 102 -450 182 -822 177 -826 -29 -28 -702 -400 -723
-400 -7 0 -137 36 -289 79 -152 44 -337 96 -411 116 -74 19 -145 40 -156 45
-12 4 -115 88 -229 184 -114 97 -216 176 -226 176 -11 0 -110 -14 -220 -30
-111 -17 -203 -29 -204 -28 -1 2 -10 53 -19 113 -9 61 -53 343 -97 628 -45
285 -79 521 -76 524 4 3 71 -4 149 -16 253 -39 643 -103 646 -106 2 -2 37
-186 78 -411 44 -242 79 -411 86 -416 7 -4 20 -8 28 -8 8 0 189 -43 403 -96
213 -53 391 -94 393 -91 5 4 -286 1456 -302 1508 -5 18 7 16 -519 93 l-280 42
-195 155 c-107 85 -296 233 -420 328 -124 95 -233 181 -242 190 -11 10 -21 45
-28 91 -16 108 -21 119 -99 218 -39 50 -71 95 -71 101 0 6 20 51 45 100 l44
89 -61 391 -62 392 195 197 c107 108 244 250 305 314 l109 117 335 24 c184 14
342 23 352 22 9 -1 98 -64 197 -140z m-9129 -15 c162 -5 565 -14 895 -20 330
-6 661 -15 736 -18 l137 -7 -189 -252 -188 -252 -601 6 c-330 3 -600 4 -600 1
0 -3 -7 -72 -15 -154 -33 -339 -95 -1067 -91 -1071 2 -3 186 1 408 7 222 7
416 11 431 9 27 -4 22 -12 -164 -249 -105 -135 -198 -253 -207 -262 -14 -14
-57 -18 -267 -28 -137 -7 -251 -13 -252 -14 -1 -1 -18 -184 -38 -407 -20 -222
-44 -496 -55 -609 -10 -113 -17 -207 -15 -209 3 -2 168 8 367 23 384 28 780
54 888 57 l65 3 188 -243 c104 -134 187 -244 185 -246 -2 -1 -124 -10 -273
-19 -672 -42 -1783 -144 -2217 -205 -35 -5 -65 -7 -67 -5 -2 2 10 129 27 281
18 153 68 601 112 996 l81 717 -50 84 c-28 46 -51 87 -51 91 0 4 32 49 72 99
l72 91 38 345 c44 408 116 1032 124 1077 l6 32 -62 3 -62 3 -96 184 -95 184
264 -7 c145 -4 397 -11 559 -16z m6540 -100 c96 -66 177 -120 180 -120 3 1 86
38 185 84 99 46 181 82 183 81 5 -4 172 -1174 172 -1205 l0 -27 -97 4 c-54 2
-218 7 -365 11 -147 4 -269 10 -272 12 -2 3 -23 167 -46 365 -23 198 -43 361
-43 362 -1 1 -163 -1 -361 -4 l-358 -6 5 -56 c4 -31 30 -308 58 -616 l52 -560
56 -73 c95 -123 93 -108 31 -202 l-54 -82 63 -676 c34 -372 64 -692 67 -709 3
-23 10 -33 22 -33 28 0 734 -79 761 -86 23 -5 24 -3 18 38 -29 221 -79 680
-74 685 8 7 769 -76 778 -86 13 -12 113 -751 103 -760 -10 -10 -448 -264 -623
-361 l-114 -64 -126 16 c-69 9 -254 33 -410 54 l-285 36 -285 202 c-227 160
-545 383 -558 391 -1 1 -23 305 -48 676 -26 370 -48 683 -50 694 -3 12 -34 59
-70 104 -39 49 -64 90 -60 98 3 8 28 48 56 88 l50 73 -10 134 c-14 162 -71
1017 -71 1052 0 20 27 46 137 133 76 59 221 176 323 258 102 83 192 155 200
160 8 5 166 14 350 20 184 7 340 13 346 13 6 1 89 -52 184 -118z m-2394 -192
l369 -253 7 -95 c3 -52 16 -275 27 -495 12 -220 23 -447 26 -505 l6 -105 -179
-120 c-99 -66 -178 -123 -176 -127 3 -4 87 -62 187 -129 100 -67 185 -125 189
-128 4 -3 25 -350 47 -771 23 -421 44 -805 47 -854 l7 -89 -103 6 c-56 3 -236
12 -401 19 l-298 12 -5 41 c-3 22 -15 400 -28 841 l-22 801 -135 7 c-74 3
-245 6 -380 6 l-246 0 3 -447 c1 -247 3 -624 5 -839 l2 -392 -400 -4 c-220 -2
-401 -3 -403 -2 -2 1 4 418 14 926 l17 924 -60 84 -61 83 34 46 c19 25 47 64
63 86 l30 40 10 555 c6 305 11 608 11 673 l0 117 -57 0 -58 0 -105 156 c-58
85 -109 162 -113 170 -7 12 113 14 876 14 l884 0 369 -252z"
        />
        <path
          d="M9138 5488 c2 -321 6 -585 8 -587 2 -2 171 -6 375 -9 l372 -5 -6 129
c-4 71 -11 327 -17 569 -6 242 -13 450 -16 463 l-4 22 -358 0 -358 0 4 -582z"
        />
      </g>
    </svg>
  );
};

export default MercsWordmark;
